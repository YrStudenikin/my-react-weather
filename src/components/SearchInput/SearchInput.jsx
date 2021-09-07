import React from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import classNames from "classnames";

import iconSearch from "../../assets/images/search.svg";
import iconClose from "../../assets/images/close.svg";

const SearchInput = () => {
    const [address, setAddress] = React.useState('');
    const [isTypedInput, setIsTypedInput] = React.useState(false);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        modifyPlacesFunctions();
    }, []);

    let placesRef = null;
    const setPlacesRef = element => placesRef = element;

    const modifyPlacesFunctions = () => {
        // let originalInputOnBlur = placesRef.handleInputOnBlur;
        placesRef.handleInputOnBlur = () => {
        };
    }

    const handleChange = (address) => {
        setAddress(address);
        if (address === '' && isTypedInput) {
            handleIsTypedInput(false);
        } else if (address && !isTypedInput) {
            handleIsTypedInput(true);
        }

    };

    const handleSelect = async value => {
        handleIsTypedInput(false);
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        console.log(latLng);
        setAddress(value);
    };

    const handleIsTypedInput = isTyped => {
        setIsTypedInput(isTyped);
    };

    const onCloseClick = () => {
        setAddress('');
        placesRef.clearSuggestions(); // принудительный вызов метода с рефа библиотеки
        setIsTypedInput(false);
    }

    const onError = (status, clearSuggestions) => {
        clearSuggestions()
        if (status === 'ZERO_RESULTS') {
            setError('Результатов не найдено');
        }
    }

    return (
        <PlacesAutocomplete
            value={address}
            onChange={handleChange}
            onSelect={handleSelect}
            debounce={400}
            ref={setPlacesRef}
            searchOptions={{types: ['(cities)']}}
            onError={onError}

        >
            {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                <div className="search-city">
                    <div className="search-city__input-wrap">
                        <input
                            {...getInputProps({
                                placeholder: "Поиск города",
                                className: "search-city__input",
                            })}
                        />
                        <ul className={classNames('search-city__list', {'search-city__list--active': isTypedInput})}>
                            {loading ? <li>...Поиск</li> : ''}
                            {suggestions.length
                                ? suggestions.map(suggestion => {
                                    const className = suggestion.active ? 'search-city__list-item--active' : '';
                                    return (
                                        <li
                                            key={suggestion.placeId}
                                            {...getSuggestionItemProps(suggestion, {className})}
                                        >
                                            <span>{suggestion.formattedSuggestion.mainText}</span>
                                            <span>{suggestion.formattedSuggestion.secondaryText}</span>
                                        </li>
                                    );
                                })
                                : <li className="search-city__error">{error}</li>
                            }
                        </ul>

                        {
                            isTypedInput &&
                            <div className="search-city__icon" onClick={onCloseClick}>
                                <img className="icon-close" src={iconClose} alt=""/>
                            </div>
                        }
                        <div className="search-city__icon">
                            <img className="icon-search" src={iconSearch} alt=""/>
                        </div>
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
};

export default SearchInput;