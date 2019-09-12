import React, {useState} from "react";
import MapCtnr from "./map";
import TerminalCtnr from "./terminal-ctnr/terminal-ctnr";
import Search from "./search";
import Description from "./description";

export default function result() {
    const [posLatitude, setposLatitude] = useState(10.6415);
    const [posLongitude, setposLongitude] = useState(20.5721);

    const [itemLatitude, setItemLatitude] = useState(10.6412);
    const [itemLongitude, setItemLongitude] = useState(20.5718);

    const [itemObj, setItemObj] = useState({});

    const Handleposition = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                setposLatitude(position.coords.latitude);
                setposLongitude(position.coords.longitude);
            },
            error => console.warn(error.message),
            {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
        );
    };

    const setItemDesc = item => {
        // this will reset the item position and the descritpion
        setItemLatitude(item.latitude);
        setItemLongitude(item.longitude);
        setItemObj(item);
    };

    return (
        <div>
            {Handleposition() /*call to take the actual position*/}
            <MapCtnr
                latitude={posLatitude}
                longitude={posLongitude}
                zoom={11}
                onposition={Handleposition}
                onitemLatitude={itemLatitude}
                onitemLongitude={itemLongitude}
                obj={itemObj}
            />
            <Search />
            <TerminalCtnr setDesc={setItemDesc} />
            <Description obj={itemObj} />
        </div>
    );
}