const customStyles = (isDarkMode) => ({
    control: (provided) => ({
        ...provided,
        backgroundColor: isDarkMode ? '#121826' : '#ffffff',
        borderColor: isDarkMode ? '#14d64d' : '#cccccc',
        color: isDarkMode ? '#ffffff' : '#121826',
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: isDarkMode ? '#121826' : '#ffffff',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: isDarkMode ? '#ffffff' : '#121826',
    }),
    placeholder: (provided) => ({
        ...provided,
        color: isDarkMode ? '#cccccc' : '#666666',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? (isDarkMode ? '#14d64d' : '#e6f7e6') : (isDarkMode ? '#121826' : '#ffffff'),
        color: state.isSelected ? (isDarkMode ? '#000000' : '#121826') : (isDarkMode ? '#ffffff' : '#121826'),
        '&:hover': {
        backgroundColor: isDarkMode ? '#14d64d' : '#e6f7e6',
        color: isDarkMode ? '#000000' : '#121826',
        },
    }),
});

export default customStyles;