import { useState } from 'react'

export default function Custom() {

    const [theme, updateTheme] = useState('light')

    function handler() {
      if(theme.includes('light')){
        updateTheme('dark')
      }else{
        updateTheme('light')
      }
    }

    return [theme,handler]
}
