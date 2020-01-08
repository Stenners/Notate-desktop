import React, { useState, useEffect } from 'react'
import CodeEditor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import fm from 'front-matter'

import '../../themes/prism-material-oceanic.css'

const fs = require('fs')
const electron = require('electron')

const Editor = ({ prefs, selectedFile }) => {
  const [code, setCode] = useState(``)
  const [frontMatter, setFrontMatter] = useState()

  const returnFile = file => {
    const content = fs.readFileSync(`${prefs.dataDir}/${file}`, 'utf8')
    const fmContent = fm(content)
    setFrontMatter(fmContent.frontmatter)
    return fmContent.body
  }

  electron.ipcRenderer.on('saveNote', (event, arg) => {
    if (selectedFile) {
      fs.writeFileSync(
        `${prefs.dataDir}/${selectedFile}`,
        `---\n${frontMatter}\n---\n\n${code}`
      )
    }
  })

  useEffect(() => {
    selectedFile ? setCode(returnFile(selectedFile)) : setCode(``)
  }, [selectedFile])

  return (
    <CodeEditor
      value={code}
      onValueChange={c => setCode(c)}
      highlight={c => highlight(c, languages.md)}
      padding={10}
      style={{
        fontFamily: '"Fira Code", "Fira Mono", monospace',
        fontSize: 16,

        border: 'none',
        lineHeight: '1.4rem',
      }}
    />
  )
}

export default Editor
