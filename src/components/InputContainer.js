import React, { useState } from "react";

const InputContainer = () => {
    const [inputText, setInputText] = useState();

    console.log({ inputText });
    return (
        <>
            <label>Enter your text below:</label>

            <textarea
                id="inputContainer"
                name="story"
                rows="5"
                cols="33"
                placeholder="Input value"
                onChange={(e) => setInputText(e.target.value)}
            />
            <label>Your translated text:</label>
            <textarea
                id="outputContainer"
                name="story"
                rows="5"
                cols="33"
                placeholder="OutputValue"
            />
        </>
    );
};

export default InputContainer;
