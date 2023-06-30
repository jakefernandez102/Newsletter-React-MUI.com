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


const Formulario = () => {

    const {category, handleChangeCategory} = useNoticias();

    return (
    <div>
        <form >
            <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                    label='Category'
                    onChange={handleChangeCategory}
                    value={category}
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
        </form>
    </div>
  )
}

export default Formulario
