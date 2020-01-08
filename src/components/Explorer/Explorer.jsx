import React from 'react'
import styled from 'styled-components'
const fs = require('fs')

const Explorer = ({ prefs, setSelectedFile }) => {
  const ExplorerPane = styled.div`
    position: fixed;
  `

  const Note = styled.div`
    padding: 0.4rem 0;
    cursor: pointer;
    color: #d9e9ff;
    font-size: 15px;
  `

  return (
    <div>
      <ExplorerPane>
        {fs.readdirSync(prefs.dataDir).map(file => (
          <Note onClick={() => setSelectedFile(file)} key={file}>
            {file.split('.')[0]}
          </Note>
        ))}
      </ExplorerPane>
    </div>
  )
}

export default Explorer
