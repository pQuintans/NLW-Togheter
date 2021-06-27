import { ButtonHTMLAttributes } from "react"
import cx from 'classnames';

import './styles.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isDark?: boolean
};

export function Button({ isDark, isOutlined = false, ...props }: ButtonProps) {
  return (
    <button 
      className={cx(
        'button',
        { dark: isDark },
        { outlined: isOutlined }
      )}
      {...props} 
    />
  )
}