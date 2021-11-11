import React, { useState } from "react";

const InputContainer = () => {
    const [inputText, setInputText] = useState();

    console.log({ inputText });
    return (
        <>
            <div>
                <p>Enter your text below:</p>

                <textarea
                    id="inputContainer"
                    name="story"
                    rows="10"
                    cols="50"
                    placeholder="Input value"
                    onChange={(e) => setInputText(e.target.value)}
                />
            </div>
            <div>
                <p>Your translated text:</p>
                <textarea
                    id="outputContainer"
                    name="story"
                    rows="10"
                    cols="50"
                    placeholder="OutputValue"
                />
            </div>
        </>
    );
};

export default InputContainer;
