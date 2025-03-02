import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorConvertToHTML = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="wysiwyg"
        onEditorStateChange={onEditorStateChange}
      />
      {/*<textarea
        disabled
        rows={10}
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        className='w-full'
      />*/}
    </div>
  );
};

export default EditorConvertToHTML;
