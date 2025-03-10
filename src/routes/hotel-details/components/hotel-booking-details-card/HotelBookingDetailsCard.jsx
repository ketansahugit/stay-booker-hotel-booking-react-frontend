import React, { useState } from 'react';
import Select from 'react-select';
import DateRangePicker from 'components/ux/data-range-picker/DateRangePicker';

/**
 * HotelBookingDetailsCard Component
 * Displays a card containing detailed information about a hotel booking.
 * The details include total price, cancellation policy, dates and check-in time,
 * reservation details, room type, rate, average nightly rate, extra charges, and taxes.
 *
 * This component is designed to provide users with all the necessary information
 * regarding their hotel booking in a clear and concise manner.
 *
 * Note: Currently, the booking details are statically defined within the component
 * and do not dynamically change based on user input or external data sources.
 */
const HotelBookingDetailsCard = () => {
  const [selectedRoom, setSelectedRoom] = useState({
    value: '1 King Bed Standard Non Smoking',
    label: '1 King Bed Standard Non Smoking',
  });
  const [selectedGuests, setSelectedGuests] = useState({
    value: 2,
    label: '2 guests',
  });
  const [selectedRooms, setSelectedRooms] = useState({
    value: 1,
    label: '1 room',
  });
  const [isDatePickerVisible, setisDatePickerVisible] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection',
    },
  ]);

  const [bookingDetails] = useState({
    total: '6,819.22 INR',
    cancellationPolicy: 'Free cancellation 1 day prior to stay',
    dates: 'Jan 29-30, 2024',
    checkInTime: '3 pm',
    rateType: 'Best Flexible Rate',
    nightStay: '1 night stay',
    averageNightlyRate: '6,819.22 INR',
    extraPersonCharge: '500.00 INR',
    taxes: '1,040.22 INR',
    taxDetails:
      'Gst - 12% On Inr 0-2500, 12% On Inr 2500 - 7500, 18% On Inr 7500',
  });

  const guestOptions = [
    { value: 1, label: '1 guest' },
    { value: 2, label: '2 guests' },
    { value: 3, label: '3 guests' },
    { value: 4, label: '4 guests' },
  ];

  const roomNumberOptions = [
    { value: 1, label: '1 room' },
    { value: 2, label: '2 rooms' },
  ];

  const roomOptions = [
    {
      value: '1 King Bed Standard Non Smoking',
      label: '1 King Bed Standard Non Smoking',
    },
  ];

  const handleRoomTypeChange = (selectedOption) => {
    setSelectedRoom(selectedOption);
  };

  const handleGuestsNumberChange = (selectedOption) => {
    setSelectedGuests(selectedOption);
  };

  const handleRoomsNumberChange = (selectedOption) => {
    setSelectedRooms(selectedOption);
  };

  const onDatePickerIconClick = () => {
    setisDatePickerVisible(!isDatePickerVisible);
  };

  const onDateChangeHandler = (ranges) => {
    setDateRange([ranges.selection]);
  };

  return (
    <div className="mx-2 bg-white shadow-xl rounded-xl overflow-hidden  mt-2 md:mt-0 w-full md:w-auto">
      <div className="px-6 py-4 bg-brand text-white">
        <h2 className="text-xl font-bold">Booking Details</h2>
      </div>
      <div className="p-6 text-sm md:text-base">
        <div className="mb-4">
          <div className="text-lg font-semibold text-gray-800 mb-1">
            Total Price
          </div>
          <div className="text-xl font-bold text-indigo-600">
            {bookingDetails.total}
          </div>
          <div className="text-sm text-green-600">
            {bookingDetails.cancellationPolicy}
          </div>
        </div>
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Dates & Time</div>
          <div className="text-gray-600">
            <DateRangePicker
              isDatePickerVisible={isDatePickerVisible}
              onDatePickerIconClick={onDatePickerIconClick}
              onDateChangeHandler={onDateChangeHandler}
              setisDatePickerVisible={setisDatePickerVisible}
              dateRange={dateRange}
              inputStyle={'DARK'}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Reservation</div>
          <Select
            value={selectedRooms}
            onChange={handleRoomsNumberChange}
            options={roomNumberOptions}
            className="mb-2"
          />
          <Select
            value={selectedGuests}
            onChange={handleGuestsNumberChange}
            options={guestOptions}
          />
        </div>
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Room Type</div>
          <Select
            value={selectedRoom}
            onChange={handleRoomTypeChange}
            options={roomOptions}
          />
        </div>
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Avg. Nightly Rate</div>
          <div className="text-gray-600">
            {bookingDetails.averageNightlyRate}
          </div>
        </div>
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Extra Charges</div>
          <div className="text-gray-600">
            Extra person charge: {bookingDetails.extraPersonCharge}
          </div>
        </div>
        <div className="mb-4">
          <div className="font-semibold text-gray-800">Taxes</div>
          <div className="text-gray-600">{bookingDetails.taxes}</div>
          <div className="text-xs text-gray-500">
            {bookingDetails.taxDetails}
          </div>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50">
        <button className="w-full bg-brand-secondary text-white py-2 rounded hover:bg-yellow-600 transition duration-300">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};
export default HotelBookingDetailsCard;
