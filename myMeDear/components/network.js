import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import Modal from "react-native-modal";
import WebView from 'react-native-webview';

import { NetworkImage } from './images';
import { Paragraph } from './texts';
import styles from '../screens/styles';
import comp from './styles';

const NetworkCard = ({title, img, link}) =>{
    const [modalVisibility, setModalVisibility] = useState(false);

    const closeModal = () =>{
        setModalVisibility(!modalVisibility);
    }

    return(
        <View>
            <TouchableOpacity style={comp.card}
                onPress={() => setModalVisibility(true)}>
                <Paragraph text={title} />
                <NetworkImage
                 source={img} />
            </TouchableOpacity>

            <View style={styles.modal}>
                <Modal
                 isVisible={modalVisibility}
                 onBackButtonPress={closeModal}
                 >
                    
                    {/* <IconButton title="Close" icon_name="globe-alt"
                    handlePress={closeModal} /> */}
                    <WebView source={{ uri: link }}
                    /> 
                </Modal>
            </View>
        </View>
    )
}

export default NetworkCard;
