export interface FormMortage {
  mortage: number | null
  term: number | null
  interest: number | null
  type: number | null
}

export type formDataKey = keyof FormMortage

export interface CalcResponse {
  status: boolean
  pagoMensual: number
  pagoTotal: number
}
