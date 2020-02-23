import React, { useState, Fragment } from 'react';
import { Text } from 'react-native';
import {
    Overlay,
    Slider,
    CheckBox,
    Input,
    Button
} from 'react-native-elements';

function UploadScreenOverlay(props) {
    const [sliderValue, setSliderValue] = useState();
    const [limitNumberOfOpenings, setLimitNumberOfOpenings] = useState(false);
    const [photoTimeLimit, setPhotoTimeLimit] = useState(0);

    function saveUploadTime() {
        console.log(photoTimeLimit)
    }

    return (
        <Overlay
            isVisible={props.isVisible}
            onBackdropPress={() => { props.parentCallback(false) }}>
            <CheckBox
                title='Limit number of times that photo can be opened'
                checked={limitNumberOfOpenings}
                onPress={() => setLimitNumberOfOpenings(!limitNumberOfOpenings)}
            />
            {limitNumberOfOpenings ? (
                <Fragment>
                    <Text>Number of times photo can be opened: {sliderValue}</Text>
                    <Slider
                        value={sliderValue}
                        onValueChange={sliderValue => setSliderValue(sliderValue)}
                        step={1}
                        maximumValue={10}
                    />
                </Fragment>
            ) : (<Input
                type="number"
                placeholder='Photo time limit in minutes (max 2880)'
                onChange={e => setPhotoTimeLimit(e.target.value)}
            />)}
            < Button
                title="Confirm"
                type="outline"
                onPress={saveUploadTime}
            />
        </Overlay>
    );
}



export default UploadScreenOverlay;