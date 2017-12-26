import React from'react'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

const rootEl = document.getElementById('root')

const renderClient = () => 
  render(
    <AppContainer>
      <Provider>
        <App />
      </Provider>
    </AppContainer>,
    rootEl    
  )

  const init = () => renderClient()

  if (module.hot) {
    module.hot.accept('./containers/App', init)
  }

  init()
  