import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

const PlacesAutocomplete = ({ handleAddress }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      handleAddress(description);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        try {
          const { lat, lng } = getLatLng(results[0]);
          console.log('📍 Coordinates: ', { lat, lng });
        } catch (error) {
          console.log('😱 Error: ', error);
        }
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li className='rounded font-poppins hover:bg-gray-200' key={place_id} onClick={handleSelect(suggestion)}>
          <span className='font-semibold'>{main_text}</span> <span>{secondary_text}</span>
        </li>
      );
    });

  return (
    <div ref={ref} className='map-search'>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='Where are you going?'
        className='map-input'
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <ul className='map-list'>{renderSuggestions()}</ul>}
    </div>
  );
};

export default PlacesAutocomplete;
