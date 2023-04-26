
import React, { Component } from 'react'
type propsy = {
    imie: string;
    nazwisko: string;
}
// eexport class with props imie
export class Komponent1 extends Component<propsy> {
    static defaultProps = {
        imie: "Jan",
        nazwisko: "Kowalski"

    }
    render() {
        return (
            <div>
                <h4>Witaj {this.props.imie}</h4>
                <h4>Nazywasz się {this.props.nazwisko}</h4>
            </div>
        )
    }
}