import { reactive } from 'vue'
import { formInitialState, formInitialStateErrors } from '@/consts/FormState'
import type { formDataKey, FormMortage, CalcResponse } from '@/interface/FromMortage'

export const useMortageForm = () => {
  const formData = reactive<FormMortage>({ ...formInitialState })
  const formErrors = reactive({ ...formInitialStateErrors })

  const handleChangeValue = (values: { valueInput: number; id: formDataKey }) => {
    const { valueInput, id } = values
    formData[id] = Number(valueInput)
  }

  const handleResetForm = () => {
    Object.assign(formData, formInitialState)
  }

  const handleSubmitForm = async (): Promise<CalcResponse> => {
    handleResetErrors()
    let errors = 0
    if (!formData.mortage) {
      formErrors.mortage = true
      errors++
    }

    if (!formData.interest) {
      formErrors.interest = true
      errors++
    }

    if (!formData.term) {
      formErrors.term = true
      errors++
    }

    if (!formData.type) {
      formErrors.type = true
      errors++
    }

    if (errors > 0) {
      return {
        status: false,
        pagoMensual: 0,
        pagoTotal: 0
      }
    }

    return await calculateMortgage().then((resp) => resp)
  }

  const handleResetErrors = () => {
    Object.assign(formErrors, formInitialStateErrors)
  }

  const calculateMortgage = (): Promise<CalcResponse> => {
    return new Promise((resolve, reject) => {
      try {
        const interesAnualAMensual = formData.interest! / (12 * 100)
        const cuotasMensuales = formData.term! * 12

        const firstBlock =
          interesAnualAMensual * Math.pow(1 + interesAnualAMensual, cuotasMensuales)
        const secondBlock = Math.pow(1 + interesAnualAMensual, cuotasMensuales) - 1

        const pagoMensual = formData.mortage! * (firstBlock / secondBlock)

        resolve({
          status: true,
          pagoMensual: Number(pagoMensual.toFixed(2)),
          pagoTotal: Number((cuotasMensuales * pagoMensual).toFixed(2))
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  return {
    formData,
    formErrors,

    handleChangeValue,
    handleResetForm,
    handleSubmitForm
  }
}
