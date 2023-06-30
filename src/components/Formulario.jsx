import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import useNoticias from './../hooks/useNoticias';

const CATEGORIES = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Business'},
    { value: 'entertainment', label: 'Entertaiment'},
    { value: 'health', label: 'Health'},
    { value: 'science', label: 'Science'},
    { value: 'sports', label: 'Sports'},
    { value: 'technology', label: 'Tecnology'},
]
const LANGUAGES = [
    {value:'spa',label:'Spanish'},
    {value:'eng',label:'English'},
    {value:'fra',label:'French'}
]

const Formulario = () => {

    const {category, handleChangeCategory,language,handleChangeLanguage} = useNoticias();

    return (
    <div>
        <form >
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                    label='Category'
                    onChange={handleChangeCategory}
                    value={category}
                    sx={{backgroundColor:'white'}}
                    >
                    {CATEGORIES.map(category=> (
                        <MenuItem
                        key={category.value}
                        value={category.value}
                        >
                            {category.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{marginTop:1}}>
                <InputLabel>Language</InputLabel>
                <Select
                    label='Category'
                    onChange={handleChangeLanguage}
                    value={language}
                    sx={{backgroundColor:'white'}}
                    >
                    {LANGUAGES.map(language=> (
                        <MenuItem
                        key={language.value}
                        value={language.value}
                        >
                            {language.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    </div>
  )
}

export default Formulario
