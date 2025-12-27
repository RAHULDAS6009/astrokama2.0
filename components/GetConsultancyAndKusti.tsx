import { useState } from "react";
import Button from "./common/Button";

/* ---------------- MAIN COMPONENT ---------------- */

function GetConsultancyFormandKusti({
  title,
  buttonTitle,
}: {
  title: string;
  buttonTitle: string;
}) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");

  const [dob, setDob] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [tob, setTob] = useState({
    hour: "",
    minute: "",
    period: "AM",
  });

  const handleDobChange = (field: keyof typeof dob, value: string) => {
    if (!/^\d*$/.test(value)) return;
    setDob((prev) => ({ ...prev, [field]: value }));
  };

  const handleTobChange = (field: "hour" | "minute", value: string) => {
    if (!/^\d*$/.test(value)) return;
    setTob((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const payload = { name, dob, tob, country };
    console.log("Form Data:", payload);
  };

  return (
    <div className="w-full h-full rounded-2xl border overflow-hidden">
      {/* Header */}
      <div className="bg-primarysec text-3xl text-secondary text-center py-3 font-semibold font-amaranath">
        {title}
      </div>

      {/* Body */}
      <div className="bg-formbg px-5 py-4 space-y-4">
        {/* Name */}
        <div>
          <FormLabel text="Name" />
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        {/* DOB + TOB */}
        <div className="flex gap-3">
          {/* DOB */}
          <div className="flex-1">
            <FormLabel text="Date of Birth" />
            <InputBox>
              <MiniInput
                value={dob.day}
                onChange={(e) => handleDobChange("day", e.target.value)}
                placeholder="DD"
                maxLength={2}
              />
              <MiniInput
                value={dob.month}
                onChange={(e) => handleDobChange("month", e.target.value)}
                placeholder="MM"
                maxLength={2}
              />
              <MiniInput
                value={dob.year}
                onChange={(e) => handleDobChange("year", e.target.value)}
                placeholder="YYYY"
                maxLength={4}
              />
            </InputBox>
          </div>

          {/* TOB */}
          <div className="flex-1">
            <FormLabel text="Time of Birth" />
            <InputBox>
              <MiniInput
                value={tob.hour}
                onChange={(e) => handleTobChange("hour", e.target.value)}
                placeholder="HH"
                maxLength={2}
              />
              <MiniInput
                value={tob.minute}
                onChange={(e) => handleTobChange("minute", e.target.value)}
                placeholder="MM"
                maxLength={2}
              />
              <select
                value={tob.period}
                onChange={(e) =>
                  setTob((prev) => ({ ...prev, period: e.target.value }))
                }
                className="outline-none text-sm bg-transparent"
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </InputBox>
          </div>
        </div>

        {/* Country + Button */}
        <div className="flex gap-3 items-end">
          <div className="flex-1">
            <FormLabel text="Country" />
            <SelectInput
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
            </SelectInput>
          </div>

          <Button title={buttonTitle} type="gradient" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

const FormLabel = ({ text }: { text: string }) => (
  <label className="text-white text-lg block mb-1 libre-franklin-medium ">
    {text}
  </label>
);

const TextInput = ({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => (
  <input
    value={value}
    onChange={onChange}
    type="text"
    placeholder={placeholder}
    className="w-full px-4 py-2 rounded-md bg-white outline-none text-sm"
  />
);

const MiniInput = ({
  value,
  onChange,
  placeholder,
  maxLength,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  maxLength: number;
}) => (
  <input
    value={value}
    onChange={onChange}
    maxLength={maxLength}
    placeholder={placeholder}
    className="w-full text-center outline-none text-sm placeholder-gray-400"
  />
);

const InputBox = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-1 bg-white rounded-md px-2 py-2">
    {children}
  </div>
);

const SelectInput = ({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) => (
  <select
    value={value}
    onChange={onChange}
    className="w-full px-4 py-2 rounded-md bg-white outline-none text-sm"
  >
    {children}
  </select>
);

export default GetConsultancyFormandKusti;
