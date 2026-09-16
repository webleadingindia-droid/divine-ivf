"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

// Country codes with flags (emoji flags work cross-platform)
export const countryCodes = [
  { code: "+91", country: "IN", name: "India", flag: "🇮🇳" },
  { code: "+1", country: "US", name: "United States", flag: "🇺🇸" },
  { code: "+44", country: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+1", country: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "+61", country: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "+971", country: "AE", name: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+65", country: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "+60", country: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "+64", country: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "+49", country: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "FR", name: "France", flag: "🇫🇷" },
  { code: "+39", country: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "+41", country: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "+46", country: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "+45", country: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "+353", country: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "+351", country: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "+30", country: "GR", name: "Greece", flag: "🇬🇷" },
  { code: "+48", country: "PL", name: "Poland", flag: "🇵🇱" },
  { code: "+420", country: "CZ", name: "Czech Republic", flag: "🇨🇿" },
  { code: "+36", country: "HU", name: "Hungary", flag: "🇭🇺" },
  { code: "+40", country: "RO", name: "Romania", flag: "🇷🇴" },
  { code: "+7", country: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "+86", country: "CN", name: "China", flag: "🇨🇳" },
  { code: "+81", country: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "+82", country: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "+66", country: "TH", name: "Thailand", flag: "🇹🇭" },
  { code: "+62", country: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "+63", country: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "+84", country: "VN", name: "Vietnam", flag: "🇻🇳" },
  { code: "+880", country: "BD", name: "Bangladesh", flag: "🇧🇩" },
  { code: "+94", country: "LK", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "+977", country: "NP", name: "Nepal", flag: "🇳🇵" },
  { code: "+92", country: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "+27", country: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "+234", country: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "+254", country: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "+20", country: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "+55", country: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "+54", country: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "+56", country: "CL", name: "Chile", flag: "🇨🇱" },
  { code: "+57", country: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "+51", country: "PE", name: "Peru", flag: "🇵🇪" },
];

interface PhoneInputProps {
  value: string;
  onChange: (fullNumber: string, countryCode: string, localNumber: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  id?: string;
  name?: string;
}

export function PhoneInput({
  value,
  onChange,
  placeholder = "98765 43210",
  className = "",
  required = false,
  id,
  name,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Default +91 India
  const [localNumber, setLocalNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search when dropdown opens
  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  const handleCountrySelect = (country: typeof countryCodes[0]) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearch("");
    // Emit updated full number
    onChange(`${country.code}${localNumber}`, country.code, localNumber);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits and spaces
    const raw = e.target.value.replace(/[^\d\s]/g, "");
    setLocalNumber(raw);
    onChange(`${selectedCountry.code}${raw.replace(/\s/g, "")}`, selectedCountry.code, raw);
  };

  // Filter countries by search
  const filteredCountries = countryCodes.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search) ||
      c.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div className="flex items-stretch rounded-xl border border-rose-200/70 bg-white focus-within:border-rose-400 focus-within:ring-2 focus-within:ring-rose-100 transition-all overflow-hidden">
        {/* Country Code Selector */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 bg-rose-50/50 hover:bg-rose-50 border-r border-rose-200/70 transition-colors flex-shrink-0"
          aria-label="Select country code"
        >
          <span className="text-base leading-none">{selectedCountry.flag}</span>
          <span className="text-sm font-medium text-ink-700">{selectedCountry.code}</span>
          <ChevronDown
            className={`h-3.5 w-3.5 text-ink-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Phone Number Input */}
        <input
          type="tel"
          id={id}
          name={name}
          value={localNumber}
          onChange={handleNumberChange}
          placeholder={placeholder}
          required={required}
          className="flex-1 px-3 py-3 text-sm text-ink-900 placeholder:text-ink-300 bg-transparent outline-none min-w-0"
        />
      </div>

      {/* Hidden input to carry full number in form submission */}
      <input type="hidden" name={name ? `${name}_full` : "phone_full"} value={value} />

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 top-full left-0 mt-1 w-72 max-h-72 bg-white rounded-xl shadow-2xl border border-rose-100 overflow-hidden">
          {/* Search */}
          <div className="p-2 border-b border-rose-100/70">
            <div className="flex items-center gap-2 px-3 py-2 bg-rose-50/50 rounded-lg">
              <Search className="h-3.5 w-3.5 text-ink-400" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country..."
                className="flex-1 bg-transparent text-xs text-ink-700 placeholder:text-ink-300 outline-none"
              />
            </div>
          </div>

          {/* Country List */}
          <div className="max-h-56 overflow-y-auto">
            {filteredCountries.length === 0 ? (
              <p className="p-4 text-xs text-ink-400 text-center">No country found</p>
            ) : (
              filteredCountries.map((country, index) => (
                <button
                  key={`${country.code}-${country.country}-${index}`}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-rose-50 transition-colors ${
                    selectedCountry.code === country.code && selectedCountry.country === country.country
                      ? "bg-rose-50/70"
                      : ""
                  }`}
                >
                  <span className="text-base leading-none">{country.flag}</span>
                  <span className="flex-1 text-xs font-medium text-ink-700 truncate">
                    {country.name}
                  </span>
                  <span className="text-xs text-ink-400 font-mono">{country.code}</span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}