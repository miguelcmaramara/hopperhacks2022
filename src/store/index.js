import { calculateNewValue, getValue } from "@testing-library/user-event/dist/utils";
import { createContext, useState } from "react";

export const GlobalStoreContext = createContext({});

export const GlobalStoreActionType = {
    ADD_CONTRIBUTOR: "ADD_CONTRIBUTOR"
}

export const useGlobalStore = () => {
    //Pieces of information that our data store will manage
    const [store, setStore] = useState({
        contributingSources: []
    });

    //This is the reducer, which should handle every time of state change
    const storeReducer = (action) => {
        const {type, payload} = action;
        switch (type) {
            //Change the value of the store variables depending on which action type
            case GlobalStoreActionType.ADD_CONTRIBUTOR: {
                return setStore({
                    contributingSources: payload
                });
            }
            default:
                return store;
        }
    }

    // The functions below will update our store directly and determine
    // the state of our application. We will call these methods from our
    // components in response to events.

    store.addContributor = function (source, quantity, type) {
        if(source && quantity && type) {
            let elementToAdd = {
                contributorName: source,
                contributorQuantity: quantity,
                contributorType: type};
            let contributingSources = store.contributingSources;
            let payload = contributingSources.append(elementToAdd);
            storeReducer({
                type: GlobalStoreActionType.ADD_CONTRIBUTOR,
                payload: payload
            });
        }
    }

    return { store, storeReducer };
}