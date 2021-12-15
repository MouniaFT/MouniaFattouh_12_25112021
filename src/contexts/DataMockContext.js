import { createContext, useState } from 'react'

export const DataMockContext = createContext({})

function DataMockContextProvider({ children }) {
  const [isDataMock, setIsDataMock] = useState(false)

  return (
    <DataMockContext.Provider value={[isDataMock, setIsDataMock]}>
      {children}
    </DataMockContext.Provider>
  )
}
export default DataMockContextProvider
