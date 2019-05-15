import React, {Component, Fragment} from 'react';
import NavBar from './navbar';
import '../index.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passwd: '',
            loggedIn: true
        };
    };

    render() {
        return (
            <Fragment><NavBar />
            <div>
                <h1>Custom Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Placerat duis ultricies lacus sed turpis tincidunt. In egestas erat
                    imperdiet sed euismod nisi porta. Diam quis enim lobortis scelerisque fermentum dui faucibus.
                    Venenatis cras sed felis eget velit aliquet sagittis. Ultrices tincidunt arcu non sodales neque
                    sodales ut etiam sit. Varius vel pharetra vel turpis. Nunc mi ipsum faucibus vitae aliquet nec
                    ullamcorper. Morbi tincidunt augue interdum velit euismod. Eget nulla facilisi etiam dignissim diam
                    quis enim. Dignissim convallis aenean et tortor. Eu non diam phasellus vestibulum lorem sed.</p>
                <p>Scelerisque varius morbi enim nunc faucibus. Sed arcu non odio euismod lacinia at quis. Dignissim
                    convallis aenean et tortor at. Eget duis at tellus at urna condimentum mattis. Eu augue ut lectus
                    arcu bibendum. Blandit turpis cursus in hac habitasse platea dictumst quisque. Vestibulum morbi
                    blandit cursus risus at ultrices. Eu volutpat odio facilisis mauris sit amet. Ultrices in iaculis
                    nunc sed. Nunc aliquet bibendum enim facilisis gravida. Quam lacus suspendisse faucibus interdum
                    posuere lorem ipsum. Odio pellentesque diam volutpat commodo sed. Dui accumsan sit amet nulla
                    facilisi morbi. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Porttitor massa
                    id neque aliquam. Mauris a diam maecenas sed enim ut sem. Eget egestas purus viverra accumsan in
                    nisl nisi scelerisque eu.</p>
                <p>Et leo duis ut diam quam nulla porttitor. Dui sapien eget mi proin sed. In est ante in nibh. Dictum
                    sit amet justo donec enim diam. Et ligula ullamcorper malesuada proin libero nunc. Elementum
                    facilisis leo vel fringilla. Fringilla urna porttitor rhoncus dolor purus non enim. Id donec
                    ultrices tincidunt arcu non sodales neque sodales ut. Ut tortor pretium viverra suspendisse potenti
                    nullam ac tortor. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Mauris vitae
                    ultricies leo integer. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Ut
                    consequat semper viverra nam libero justo. Aliquam vestibulum morbi blandit cursus risus at
                    ultrices. Maecenas sed enim ut sem viverra aliquet eget sit amet. At risus viverra adipiscing at in
                    tellus integer feugiat scelerisque. Nunc faucibus a pellentesque sit amet. Risus at ultrices mi
                    tempus imperdiet nulla malesuada pellentesque elit. Lobortis scelerisque fermentum dui faucibus in
                    ornare quam viverra.</p>
                <p>Tortor consequat id porta nibh venenatis. Sem nulla pharetra diam sit amet nisl suscipit adipiscing
                    bibendum. Pulvinar elementum integer enim neque volutpat ac. Cursus in hac habitasse platea dictumst
                    quisque sagittis purus. Massa sed elementum tempus egestas sed sed risus. Egestas egestas fringilla
                    phasellus faucibus scelerisque eleifend donec pretium vulputate. Gravida in fermentum et
                    sollicitudin ac. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi.
                    Dignissim diam quis enim lobortis scelerisque. In est ante in nibh mauris cursus. Integer vitae
                    justo eget magna fermentum iaculis. Massa sed elementum tempus egestas sed sed. Id volutpat lacus
                    laoreet non curabitur gravida arcu ac. Volutpat ac tincidunt vitae semper. Sit amet dictum sit amet
                    justo donec. A erat nam at lectus urna duis convallis convallis tellus. Enim nunc faucibus a
                    pellentesque sit amet porttitor eget dolor. Cras sed felis eget velit aliquet sagittis id
                    consectetur. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Est placerat in
                    egestas erat.</p>
            </div></Fragment>
        )
    };
}

export default Content;