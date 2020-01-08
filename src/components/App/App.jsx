import React, { useState } from 'react'
import Split from 'react-split'
import styled from 'styled-components'
import Explorer from '../Explorer'
import Editor from '../Editor'

const Wrapper = styled.div`
  background-color: #292d3e;
  color: #eeffff;
  font-family: 'Montserrat';
  line-height: 1.3rem;
`

const App = ({ prefs }) => {
  const [selectedFile, setSelectedFile] = useState()
  return (
    <Wrapper>
      <Split
        sizes={[25, 75]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
        style={{ display: 'flex' }}
      >
        <Explorer setSelectedFile={setSelectedFile} prefs={prefs} />
        <Editor selectedFile={selectedFile} prefs={prefs} />
      </Split>
    </Wrapper>
  )
}

export default App
