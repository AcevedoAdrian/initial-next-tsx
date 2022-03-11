import { FC } from "react"

export const DarkLayout: FC = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.9)',
      padding: '1rem',
      color: 'white',
      borderRadius: '0.5rem',
    }}>
      <div>
        {children}
      </div>
    </div>
  )
}
