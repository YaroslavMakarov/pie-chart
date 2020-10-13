import React, { useState } from "react";
import cn from "classnames";
import { v4 as uuidv4 } from 'uuid';
import { getRandomColor } from "../../helpers/helprs";
import "./HomePage.scss";

type Props = {
    pieChunks: Chunk[];
    addPieChunk: (arg: Chunk[]) => void;
}

const HomePage: React.FC<Props> = ({ pieChunks, addPieChunk }) => {
    const [textInputValue, changeTextInputValue] = useState<string>("");
    const [numberInputValue, setNumberInputValue] = useState<string>("");
    const [textLengthChecker, setTextLengthChecker] = useState<boolean>(false);
    const [numberChecker, setNumberChecker] = useState<boolean>(false);

    const handlerChangeTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        changeTextInputValue(value.trim());
    };

    const handlerChangeNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setNumberInputValue(value.trim());
    };

    const handlerAcceptInputs = () => {
        if (textInputValue.length < 2 || textInputValue.length > 10) {
            setTextLengthChecker(true);
        } else if (isNaN(Number(numberInputValue)) || numberInputValue === "") {
            setNumberChecker(true);
        } else {
            addPieChunk(
                [...pieChunks,
                    ...[
                        {
                            id: uuidv4(),
                            name: textInputValue,
                            total: Number(numberInputValue),
                            color: getRandomColor(),
                        }
                    ]
                ]
            );
            changeTextInputValue("");
            setNumberInputValue("");
            setTextLengthChecker(false);
            setNumberChecker(false);
        }
    };

    return (
        <div className="home">
            <div className="home__input-wrapper">
                <input
                    type="text"
                    className="home__input"
                    value={textInputValue}
                    placeholder="enter name"
                    onChange={(event => handlerChangeTextInput(event))}
                />
                <div className={cn(
                    "home__input-warning",
                    {
                        "home__input-warning--active": textLengthChecker,
                    }
                )}>
                    Length must be longer than 2 letter or shorter than 10 letter
                </div>
            </div>
            <div className="home__input-wrapper">
                <input
                    type="text"
                    value={numberInputValue}
                    className="home__input"
                    placeholder="enter count"
                    onChange={(event => handlerChangeNumberInput(event))}

                />
                <div className={cn(
                    "home__input-warning",
                    {
                        "home__input-warning--active": numberChecker,
                    }
                )}>
                    Value must be a number
                </div>
            </div>
            <button
                type="button"
                className="home__button"
                onClick={() => handlerAcceptInputs()}
            >
                accept
            </button>
        </div>
    )
};

export default HomePage;
