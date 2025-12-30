"use client";

import React, { useState, useEffect } from "react";

// Types
interface Country {
  name: string;
  iso: string;
  dial: string;
  flag: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

interface FormData {
  consultType: "first" | "follow" | "";
  consultModes: string[];
  selectedDate: string;
  selectedTime: string;
  fullName: string;
  gender: "male" | "female" | "other" | "";
  dob: string;
  tobHour: string;
  tobMinute: string;
  tobSecond: string;
  tobAmPm: "AM" | "PM";
  country: string;
  state: string;
  city: string;
  pincode: string;
  countryIso: string;
  phoneNumber: string;
  email: string;
  consultationPreferences: string[];
  otherPreferences: string;
  consulted: "yes" | "no" | "";
  specificConcerns: string;
  remedies: "yes" | "no" | "maybe" | "";
  agreeToTerms: boolean;
  declarationDate: string;
}

// Calendar Component
interface CalendarProps {
  currentMonth: Date;
  selectedDate: string;
  onMonthChange: (date: Date) => void;
  onDateSelect: (date: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  currentMonth,
  selectedDate,
  onMonthChange,
  onDateSelect,
}) => {
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const handlePrevMonth = () => {
    onMonthChange(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    onMonthChange(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const isDayAvailable = (day: number) => {
    const today = new Date();
    const checkDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    return (
      checkDate >=
      new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
  };

  const handleDateSelect = (day: number) => {
    const selected = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    onDateSelect(selected.toLocaleDateString());
  };

  const renderCalendar = () => {
    const { firstDay, daysInMonth } = getDaysInMonth(currentMonth);
    const days = [];
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    for (let day = 1; day <= daysInMonth; day++) {
      const available = isDayAvailable(day);
      const monthName = monthNames[currentMonth.getMonth()];
      const dayDate = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      ).toLocaleDateString();
      const isSelected = selectedDate === dayDate;

      days.push(
        <div
          key={day}
          onClick={() => handleDateSelect(day)}
          className={`p-3 cursor-pointer rounded-lg text-center border transition-all ${
            isSelected && available
              ? "bg-white border-orange-500 border-2"
              : available
              ? "bg-white hover:bg-gray-50 border-gray-200"
              : "bg-gray-50 hover:bg-gray-100 border-gray-200 opacity-60"
          }`}
        >
          <div className="text-sm font-semibold text-gray-800 mb-1">
            {monthName} {day}
          </div>
          {isSelected && available && (
            <div className="flex items-center justify-center gap-1 mt-1">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-green-600">
                Available
              </span>
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-between items-center bg-orange-500 text-white px-3 py-2 rounded-lg text-sm">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="font-bold hover:bg-orange-600 px-2 py-1 rounded"
        >
          &lt;
        </button>
        <span className="font-semibold">
          {currentMonth.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button
          type="button"
          onClick={handleNextMonth}
          className="font-bold hover:bg-orange-600 px-2 py-1 rounded"
        >
          &gt;
        </button>
      </div>
      <div className="w-full max-w-2xl border p-4 mt-2 rounded-md bg-white">
        <div className="grid grid-cols-7 text-center font-medium text-gray-700 mb-3 text-sm">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <div key={`day-${index}`} className="py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
          {renderCalendar()}
        </div>
        <input
          type="text"
          value={selectedDate}
          className="w-full mt-3 p-2 border rounded bg-gray-100 text-center text-xs"
          placeholder="Select a date"
          readOnly
        />
      </div>
    </div>
  );
};

// Time Slot Booking Component
interface TimeSlotBookingProps {
  afternoonSlots: TimeSlot[];
  eveningSlots: TimeSlot[];
  selectedTime: string;
  onTimeSelect: (time: string) => void;
}

const TimeSlotBooking: React.FC<TimeSlotBookingProps> = ({
  afternoonSlots,
  eveningSlots,
  selectedTime,
  onTimeSelect,
}) => {
  return (
    <div className="text-sm">
      <div className="flex items-center gap-6 mb-3">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-red-500 rounded"></span>
          <span className="text-xs">Booked</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 bg-green-600 rounded"></span>
          <span className="text-xs">Available</span>
        </div>
      </div>

      <h3 className="font-semibold mb-1 text-xs">Afternoon</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {afternoonSlots.map((slot) => (
          <button
            key={slot.time}
            type="button"
            onClick={() => slot.available && onTimeSelect(slot.time)}
            className={`px-2 py-1 text-xs rounded ${
              slot.available
                ? "bg-green-100 hover:bg-green-200"
                : "bg-red-100 cursor-not-allowed"
            } ${selectedTime === slot.time ? "ring-2 ring-orange-500" : ""}`}
            disabled={!slot.available}
          >
            {slot.time}
          </button>
        ))}
      </div>

      <h3 className="font-semibold mb-1 text-sm">Evening</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {eveningSlots.map((slot) => (
          <button
            key={slot.time}
            type="button"
            onClick={() => slot.available && onTimeSelect(slot.time)}
            className={`px-2 py-1 text-xs rounded ${
              slot.available
                ? "bg-green-100 hover:bg-green-200"
                : "bg-red-100 cursor-not-allowed"
            } ${selectedTime === slot.time ? "ring-2 ring-orange-500" : ""}`}
            disabled={!slot.available}
          >
            {slot.time}
          </button>
        ))}
      </div>
    </div>
  );
};

const ConsultationForm: React.FC = () => {
  // State Management
  const [formData, setFormData] = useState<FormData>({
    consultType: "",
    consultModes: [],
    selectedDate: "",
    selectedTime: "",
    fullName: "",
    gender: "",
    dob: "",
    tobHour: "",
    tobMinute: "",
    tobSecond: "",
    tobAmPm: "AM",
    country: "",
    state: "",
    city: "",
    pincode: "",
    countryIso: "IN",
    phoneNumber: "",
    email: "",
    consultationPreferences: [],
    otherPreferences: "",
    consulted: "",
    specificConcerns: "",
    remedies: "",
    agreeToTerms: false,
    declarationDate: new Date().toISOString().split("T")[0],
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearchFilter, setCountrySearchFilter] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Countries Data
  const countries: Country[] = [
    {
      name: "India",
      iso: "IN",
      dial: "+91",
      flag: "https://flagcdn.com/w20/in.png",
    },
    {
      name: "United States",
      iso: "US",
      dial: "+1",
      flag: "https://flagcdn.com/w20/us.png",
    },
    {
      name: "United Kingdom",
      iso: "GB",
      dial: "+44",
      flag: "https://flagcdn.com/w20/gb.png",
    },
    {
      name: "Australia",
      iso: "AU",
      dial: "+61",
      flag: "https://flagcdn.com/w20/au.png",
    },
    {
      name: "Canada",
      iso: "CA",
      dial: "+1",
      flag: "https://flagcdn.com/w20/ca.png",
    },
    {
      name: "Germany",
      iso: "DE",
      dial: "+49",
      flag: "https://flagcdn.com/w20/de.png",
    },
    {
      name: "France",
      iso: "FR",
      dial: "+33",
      flag: "https://flagcdn.com/w20/fr.png",
    },
    {
      name: "Japan",
      iso: "JP",
      dial: "+81",
      flag: "https://flagcdn.com/w20/jp.png",
    },
    {
      name: "China",
      iso: "CN",
      dial: "+86",
      flag: "https://flagcdn.com/w20/cn.png",
    },
    {
      name: "Brazil",
      iso: "BR",
      dial: "+55",
      flag: "https://flagcdn.com/w20/br.png",
    },
  ];

  // Time Slots
  const afternoonSlots: TimeSlot[] = [
    { time: "12:00 PM", available: true },
    { time: "12:30 PM", available: false },
    { time: "1:00 PM", available: true },
    { time: "1:30 PM", available: true },
  ];

  const eveningSlots: TimeSlot[] = [
    { time: "5:00 PM", available: true },
    { time: "5:30 PM", available: false },
    { time: "6:00 PM", available: true },
    { time: "6:30 PM", available: true },
  ];

  // Initialize with India
  useEffect(() => {
    const india = countries.find((c) => c.iso === "IN");
    if (india) setSelectedCountry(india);
  }, []);

  // Calendar handlers
  const handleMonthChange = (date: Date) => {
    setCurrentMonth(date);
  };

  const handleDateSelect = (date: string) => {
    setFormData({ ...formData, selectedDate: date });
  };

  const handleTimeSelect = (time: string) => {
    setFormData({ ...formData, selectedTime: time });
  };

  // Country Selection
  const filteredCountries = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearchFilter.toLowerCase()) ||
      c.iso.toLowerCase().includes(countrySearchFilter.toLowerCase()) ||
      c.dial.includes(countrySearchFilter)
  );

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setFormData({ ...formData, countryIso: country.iso });
    setShowCountryDropdown(false);
  };

  // Handle checkbox changes
  const handleConsultModeChange = (mode: string) => {
    const updated = formData.consultModes.includes(mode)
      ? formData.consultModes.filter((m) => m !== mode)
      : [...formData.consultModes, mode];
    setFormData({ ...formData, consultModes: updated });
  };

  const handlePreferenceChange = (pref: string) => {
    const updated = formData.consultationPreferences.includes(pref)
      ? formData.consultationPreferences.filter((p) => p !== pref)
      : [...formData.consultationPreferences, pref];
    setFormData({ ...formData, consultationPreferences: updated });
  };

  // Payment handlers
  const handlePayment = (amount: number) => {
    if (!formData.agreeToTerms) {
      alert(
        "Please agree to the declaration terms before proceeding with payment."
      );
      return;
    }
    alert(`Payment of ₹${amount} initiated. (Integration required)`);
  };

  return (
    <div className="min-h-screen  font-sans">
      {/* Form Container */}
      <div className="w-full max-w-5xl mx-auto mt-10 rounded-xl shadow-xl overflow-hidden">
        {/* Form Header */}
        <div className="bg-orange-500 max-w-2xl mx-auto  rounded-t-2xl px-6 py-4  text-center">
          <h1 className="text-2xl md:text-3xl font-amaranath font-bold text-white uppercase tracking-wide">
            ASTROLOGICAL CONSULTANCY FORM
          </h1>
        </div>
        <div className="bg-[#3b0f23] border border-primarysec  rounded-t-xl pt-8 pb-6 px-8 relative">
          {/* Orange Banner */}

          {/* Instructional Text */}
          <p className="text-center text-orange-400 mb-2 text-xl md:text-base">
            Please fill out this form to book your consultation. All information
            is kept confidential.
          </p>
          <p className="text-center text-gray-200 text-sm md:text-base">
            Slot Duration: 20 Minutes.
          </p>
        </div>

        {/* Form Content */}
        <div className="bg-primarysec rounded-b-xl p-8">
          <form className="space-y-6 mt-8">
            {/* Consultation Type */}
            <div className="flex gap-4 flex-wrap">
              <label className="block mb-1 font-medium w-full text-[#280116]">
                Select Consultation Type
              </label>
              <label className="flex items-center space-x-3 cursor-pointer bg-white px-4 py-2 rounded-md border">
                <input
                  type="radio"
                  name="consultType"
                  value="first"
                  checked={formData.consultType === "first"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      consultType: e.target.value as "first",
                    })
                  }
                  className="h-4 w-4"
                />
                <span className="text-[#280116]">1st Consultation</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer bg-white px-4 py-2 rounded-md border">
                <input
                  type="radio"
                  name="consultType"
                  value="follow"
                  checked={formData.consultType === "follow"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      consultType: e.target.value as "follow",
                    })
                  }
                  className="h-4 w-4"
                />
                <span className="text-[#280116]">Follow-up Consultation</span>
              </label>
            </div>

            {/* Consultation Mode */}
            <div>
              <label
                className="font-medium block text-[#280116]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                Preferred Mode of Consultation
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                {["Chamber Visit", "Phone Call", "Video Call (Zoom)"].map(
                  (mode) => (
                    <label
                      key={mode}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border"
                    >
                      <input
                        type="checkbox"
                        checked={formData.consultModes.includes(mode)}
                        onChange={() => handleConsultModeChange(mode)}
                        className="h-4 w-4"
                      />
                      <span className="text-[#280116]">{mode}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Schedule Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 border rounded-lg bg-white text-sm">
              {/* Calendar */}
              <Calendar
                currentMonth={currentMonth}
                selectedDate={formData.selectedDate}
                onMonthChange={handleMonthChange}
                onDateSelect={handleDateSelect}
              />

              {/* Time Slots */}
              <TimeSlotBooking
                afternoonSlots={afternoonSlots}
                eveningSlots={eveningSlots}
                selectedTime={formData.selectedTime}
                onTimeSelect={handleTimeSelect}
              />
            </div>

            {/* Personal Information */}
            <div className="bg-gradient-to-r from-[#4A2F2B] to-[#9C6F63] text-white px-4 py-2 rounded-md">
              <h2 className="text-lg font-semibold">PERSONAL INFORMATION</h2>
            </div>

            <div className="space-y-3">
              <div>
                <label className="font-medium text-[#280116]">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full mt-1 px-3 py-2 border rounded-md bg-white focus:ring-2 focus:ring-[#4A2F2B] text-[#280116]"
                />
              </div>

              <div>
                <label
                  className="font-medium block text-[#280116]"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  Gender
                </label>
                <div className="flex gap-6 mt-1">
                  {(["male", "female", "other"] as const).map((gender) => (
                    <label
                      key={gender}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            gender: e.target.value as typeof gender,
                          })
                        }
                        className="h-4 w-4"
                      />
                      <span className="text-[#280116]">
                        {gender.charAt(0).toUpperCase() + gender.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="font-medium text-[#280116]"
                    style={{ fontFamily: "Caveat, cursive" }}
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) =>
                      setFormData({ ...formData, dob: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md bg-white text-[#280116]"
                  />
                </div>
                <div>
                  <label
                    className="font-medium block text-[#280116]"
                    style={{ fontFamily: "Caveat, cursive" }}
                  >
                    Time of Birth
                  </label>
                  <div className="flex items-baseline mt-1">
                    <input
                      type="number"
                      min="0"
                      max="12"
                      placeholder="HH"
                      value={formData.tobHour}
                      onChange={(e) =>
                        setFormData({ ...formData, tobHour: e.target.value })
                      }
                      className="w-16 px-2 py-1 border rounded-l-md bg-white text-[#280116]"
                    />
                    <input
                      type="number"
                      min="0"
                      max="59"
                      placeholder="MM"
                      value={formData.tobMinute}
                      onChange={(e) =>
                        setFormData({ ...formData, tobMinute: e.target.value })
                      }
                      className="w-16 px-2 py-1 border bg-white text-[#280116]"
                    />
                    <input
                      type="number"
                      min="0"
                      max="59"
                      placeholder="SS"
                      value={formData.tobSecond}
                      onChange={(e) =>
                        setFormData({ ...formData, tobSecond: e.target.value })
                      }
                      className="w-16 px-2 py-1 border bg-white text-[#280116]"
                    />
                    <select
                      value={formData.tobAmPm}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tobAmPm: e.target.value as "AM" | "PM",
                        })
                      }
                      className="px-2 py-1 border rounded-r-md bg-white text-[#280116]"
                    >
                      <option>AM</option>
                      <option>PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Place of Birth */}
            <div className="space-y-3">
              <label
                className="font-medium text-center block text-[#280116]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                Place of Birth
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-[#280116]">Country</label>
                  <select
                    value={formData.country}
                    onChange={(e) =>
                      setFormData({ ...formData, country: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md bg-white text-[#280116]"
                  >
                    <option value="">Select Country</option>
                    {countries.map((c) => (
                      <option key={c.iso} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-[#280116]">State</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) =>
                      setFormData({ ...formData, state: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md bg-white text-[#280116]"
                    placeholder="Enter State"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={formData.pincode}
                  onChange={(e) =>
                    setFormData({ ...formData, pincode: e.target.value })
                  }
                  placeholder="PIN Code"
                  className="w-full px-3 py-2 border rounded-md bg-white text-[#280116]"
                />
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  placeholder="City"
                  className="w-full px-3 py-2 border rounded-md bg-white text-[#280116]"
                />
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gradient-to-r from-[#4A2F2B] to-[#9C6F63] text-white px-4 py-2 rounded-md">
              <h2 className="text-lg font-semibold">Contact Details</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2">
                <label
                  className="font-medium text-[#280116]"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  Phone Number
                </label>
                <div className="flex gap-2 mt-1 items-center relative">
                  <div className="flex items-center border rounded-md overflow-hidden bg-white">
                    <input
                      type="text"
                      value={countrySearchFilter || formData.countryIso}
                      onChange={(e) => {
                        setCountrySearchFilter(e.target.value);
                        setShowCountryDropdown(true);
                      }}
                      maxLength={3}
                      placeholder="IN"
                      className="w-14 px-2 py-2 uppercase text-center outline-none border-r bg-white text-[#280116]"
                    />
                    <div
                      onClick={() =>
                        setShowCountryDropdown(!showCountryDropdown)
                      }
                      className="flex items-center gap-2 px-3 py-2 cursor-pointer bg-gray-50"
                    >
                      {selectedCountry && (
                        <>
                          <img
                            src={selectedCountry.flag}
                            className="w-5 h-4"
                            alt="flag"
                          />
                          <span className="text-sm font-medium">
                            {selectedCountry.dial}
                          </span>
                        </>
                      )}
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {showCountryDropdown && (
                    <div className="absolute top-full left-0 z-20 mt-1 max-h-48 w-64 overflow-y-auto bg-white border rounded-md shadow-lg">
                      {filteredCountries.map((country) => (
                        <div
                          key={country.iso}
                          onClick={() => handleCountrySelect(country)}
                          className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                          <img
                            src={country.flag}
                            className="w-5 h-4"
                            alt={country.name}
                          />
                          <span className="flex-1">{country.name}</span>
                          <span className="text-gray-500">{country.dial}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    placeholder="Phone number"
                    className="flex-1 px-3 py-2 border rounded-md bg-white text-[#280116]"
                  />
                </div>
              </div>

              <div className="col-span-1">
                <label
                  className="font-medium text-[#280116]"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full mt-1 px-3 py-2 border rounded-md bg-white text-[#280116]"
                />
              </div>
            </div>

            {/* Consultation Preferences */}
            <div className="bg-gradient-to-r from-[#4A2F2B] to-[#9C6F63] text-white px-4 py-2 rounded-md">
              <h2 className="text-lg font-semibold">
                Consultation Preferences
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Career Guidance",
                "Love Life",
                "Marriage Life",
                "Health & Wellbeing",
                "Financial Condition",
                "Business",
                "Education",
                "Spiritual Growth",
              ].map((pref) => (
                <label
                  key={pref}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border"
                >
                  <input
                    type="checkbox"
                    checked={formData.consultationPreferences.includes(pref)}
                    onChange={() => handlePreferenceChange(pref)}
                    className="h-4 w-4"
                  />
                  <span className="text-[#280116]">{pref}</span>
                </label>
              ))}
            </div>

            <div>
              <label
                className="font-medium text-[#280116]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                Others (Please Specify)
              </label>
              <textarea
                value={formData.otherPreferences}
                onChange={(e) =>
                  setFormData({ ...formData, otherPreferences: e.target.value })
                }
                className="w-full mt-1 px-3 py-2 border rounded-md h-20 bg-white text-[#280116]"
              />
            </div>

            {/* Additional Information */}
            <div className="bg-gradient-to-r from-[#4A2F2B] to-[#9C6F63] text-white px-4 py-2 rounded-md">
              <h2 className="text-lg font-semibold">Additional Information</h2>
            </div>

            <div>
              <label
                className="font-medium text-[#280116]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                Have you consulted an Astrologer before?
              </label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border">
                  <input
                    type="radio"
                    name="consulted"
                    value="yes"
                    checked={formData.consulted === "yes"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consulted: e.target.value as "yes",
                      })
                    }
                    className="h-4 w-4"
                  />
                  <span className="text-[#280116]">Yes</span>
                </label>
                <label className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border">
                  <input
                    type="radio"
                    name="consulted"
                    value="no"
                    checked={formData.consulted === "no"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        consulted: e.target.value as "no",
                      })
                    }
                    className="h-4 w-4"
                  />
                  <span className="text-[#280116]">No</span>
                </label>
              </div>
            </div>

            <div>
              <label
                className="font-medium text-[#280116]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                Specific Questions / Concerns
              </label>
              <textarea
                value={formData.specificConcerns}
                onChange={(e) =>
                  setFormData({ ...formData, specificConcerns: e.target.value })
                }
                className="w-full mt-1 px-3 py-2 border rounded-md h-24 bg-white text-[#280116]"
              />
            </div>

            {/* Remedies & Guidance */}
            <div className="bg-gradient-to-r from-[#4A2F2B] to-[#9C6F63] text-white px-4 py-2 rounded-md">
              <h2 className="text-lg font-semibold">Remedies & Guidance</h2>
            </div>

            <div>
              <p
                className="font-medium text-[#280116]"
                style={{ fontFamily: "Caveat, cursive" }}
              >
                Are you open to remedial suggestions (gemstones, rudraksha,
                color therapy, mantras, puja, vastu)?
              </p>
              <div className="flex gap-8 mt-2">
                <label className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border">
                  <input
                    type="radio"
                    name="remedies"
                    value="yes"
                    checked={formData.remedies === "yes"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        remedies: e.target.value as "yes",
                      })
                    }
                    className="h-4 w-4"
                  />
                  <span className="text-[#280116]">Yes</span>
                </label>
                <label className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border">
                  <input
                    type="radio"
                    name="remedies"
                    value="no"
                    checked={formData.remedies === "no"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        remedies: e.target.value as "no",
                      })
                    }
                    className="h-4 w-4"
                  />
                  <span className="text-[#280116]">No</span>
                </label>
                <label className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border">
                  <input
                    type="radio"
                    name="remedies"
                    value="maybe"
                    checked={formData.remedies === "maybe"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        remedies: e.target.value as "maybe",
                      })
                    }
                    className="h-4 w-4"
                  />
                  <span className="text-[#280116]">Maybe</span>
                </label>
              </div>
            </div>

            {/* Declaration */}
            <section className="mt-10 bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Declaration
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                I hereby confirm that the information provided above is true to
                the best of my knowledge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                I understand that astrological guidance is advisory in nature
                and not a substitute for professional medical, financial, or
                legal services.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="hidden print:block">
                  <label className="block text-gray-600 font-medium mb-1">
                    Signature:
                  </label>
                  <div className="w-full border border-gray-300 rounded-md px-3 py-5"></div>
                </div>
                <div>
                  <label className="block text-gray-600 font-medium mb-1">
                    Date:
                  </label>
                  <input
                    type="date"
                    value={formData.declarationDate}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        declarationDate: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-[#280116] focus:ring-2 focus:ring-orange-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-6 flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreeToTerms: e.target.checked })
                  }
                  className="h-5 w-5 text-orange-500"
                />
                <label className="text-gray-700 font-medium">
                  I agree to the declaration terms.
                </label>
              </div>

              {/* Payment Buttons */}
              <div className="space-y-6 text-gray-700">
                <div className="border p-4 rounded-lg">
                  <p className="text-gray-800 font-semibold mb-1">
                    For Offline Visit Fees : ₹1500
                  </p>
                  <p className="text-gray-600">
                    Booking Amount ₹500 — after visiting the chamber, remaining
                    ₹1000
                  </p>
                  <button
                    type="button"
                    onClick={() => handlePayment(500)}
                    disabled={!formData.agreeToTerms}
                    className={`mt-3 px-4 py-2 bg-purple-700 text-white font-semibold rounded-md shadow hover:bg-purple-800 ${
                      !formData.agreeToTerms
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    PAY ₹500
                  </button>
                </div>

                <div className="border p-4 rounded-lg">
                  <p className="text-gray-800 font-semibold mb-1">
                    For Online Fees : ₹1800
                  </p>
                  <button
                    type="button"
                    onClick={() => handlePayment(1800)}
                    disabled={!formData.agreeToTerms}
                    className={`mt-3 px-4 py-2 bg-purple-700 text-white font-semibold rounded-md shadow hover:bg-purple-800 ${
                      !formData.agreeToTerms
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    PAY ₹1800
                  </button>
                </div>
              </div>
            </section>

            {/* Print Button */}
            <button
              type="button"
              onClick={() => window.print()}
              className="w-full bg-gradient-to-r from-[#4A2F2B] to-[#9C6F63] text-white py-3 rounded-md font-semibold text-lg hover:from-[#5A3F3B] hover:to-[#A97F73] transition shadow-lg"
            >
              Print Form
            </button>
          </form>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          /* Hide navigation and buttons */
          nav,
          button {
            display: none !important;
          }

          /* Page setup */
          @page {
            margin: 1cm;
            size: A4;
          }

          body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Form container */
          .min-h-screen {
            background: white !important;
            padding: 0 !important;
          }

          /* Header styling for print */
          .bg-orange-500 {
            background-color: #f97316 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color: white !important;
            page-break-inside: avoid;
          }

          .bg-\\[\\#3b0f23\\] {
            background-color: #3b0f23 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            page-break-inside: avoid;
          }

          /* Form content background */
          .bg-primarysec {
            background-color: #d1c1b4 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Section headers */
          .bg-gradient-to-r {
            background: linear-gradient(to right, #4a2f2b, #9c6f63) !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color: white !important;
            page-break-inside: avoid;
          }

          /* Form inputs */
          input,
          select,
          textarea {
            border: 1px solid #4a2f2b !important;
            background: white !important;
            box-shadow: none !important;
            color: #280116 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Input labels and text */
          label,
          .text-\\[\\#280116\\] {
            color: #280116 !important;
          }

          /* Hide placeholders when printing */
          input::placeholder,
          textarea::placeholder {
            color: transparent !important;
          }

          /* Calendar section */
          .bg-white {
            background: white !important;
            border: 1px solid #4a2f2b !important;
          }

          /* Time slot buttons */
          .bg-green-100,
          .bg-red-100 {
            border: 1px solid #4a2f2b !important;
          }

          /* Radio and checkbox styling */
          input[type="radio"],
          input[type="checkbox"] {
            border: 1px solid #4a2f2b !important;
          }

          /* Declaration section */
          .border-gray-200,
          .border-gray-300 {
            border-color: #4a2f2b !important;
          }

          /* Ensure text is readable */
          * {
            color-adjust: exact;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* Prevent page breaks inside important sections */
          .space-y-6 > div {
            page-break-inside: avoid;
          }

          /* Print button styling */
          button[type="button"] {
            display: none !important;
          }

          /* Additional styling for better print appearance */
          h1,
          h2,
          h3 {
            page-break-after: avoid;
          }

          /* Ensure orange text in header prints correctly */
          p[class*="text-orange"] {
            color: #fb923c !important;
          }

          /* Ensure gray text in header prints correctly */
          p[class*="text-gray-200"] {
            color: #e5e7eb !important;
          }

          /* Payment section styling */
          section {
            page-break-inside: avoid;
          }

          /* Better spacing for printed form */
          .space-y-6 > * + * {
            margin-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ConsultationForm;
