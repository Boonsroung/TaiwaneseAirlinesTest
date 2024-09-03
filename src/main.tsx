import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import AppRouter from './App.router'

import './index.css'
import './antd.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      componentSize='large'
      theme={{
        token: {
          colorPrimary: '#ED1556',
          colorTextBase: '#515151',
          borderRadius: 2
        },
        components: {
          Card: {
            borderRadius: 8,
            algorithm: true
          },
          Input: {
            colorFillTertiary: '#F4F7FF',
            colorTextPlaceholder: '#707070',
            colorText: '#282828',
            algorithm: true
          },
          Select: {
            colorFillTertiary: '#F4F7FF',
            colorTextPlaceholder: '#707070',
            algorithm: true
          }
        }
      }}
    >
      <RouterProvider router={AppRouter} />
    </ConfigProvider>
  </StrictMode>
)
