import { CSSProperties, JSXElementConstructor, ReactElement, ReactNode } from "react"

export interface DraggableModalProps {
  objectId: string
  title: string
  children: ReactNode
  footer?: ReactElement<any, string | JSXElementConstructor<any>> | undefined

  width?: number
  position?: object
  style?: object
  bodyStyle?: object

  open: boolean
  onOk?: (e: any) => void
  onCancel?: (e: any) => void

  destroyOnClose?: boolean
  additionalProps?: any
  okButtonProps?: object
  cancelButtonProps?: object
  maskStyle?: CSSProperties
};