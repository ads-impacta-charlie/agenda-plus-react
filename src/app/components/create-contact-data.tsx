import {ContactData} from "@/app/entity/contact-data";
import TextField from "@mui/material/TextField";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import ContactDataType from "@/app/entity/contact-data-type";
import ContactDataCategory from "@/app/entity/contact-data-category";

interface CreateContactDataParams {
  data: ContactData;
  dataIndex: number;
  onChange: (data: ContactData, dataIndex: number) => void
}

export default function CreateContactData({data, dataIndex, onChange}: CreateContactDataParams) {
  const handleChangeType = (type: string) => {
    onChange({...data, type}, dataIndex)
  }

  const handleChangeCategory = (category: string) => {
    onChange({...data, category}, dataIndex)
  }

  const handleChangeValue = (value: string) => {
    onChange({...data, value}, dataIndex)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={3}>
        <FormControl fullWidth>
          <InputLabel id="data-type">Tipo</InputLabel>
          <Select labelId="data-type" value={data.type} label="Tipo" onChange={e => handleChangeType(e.target.value)}>
            {Object.keys(ContactDataType).map(type => (
              <MenuItem key={type} value={type}>{ContactDataType[type]}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={3}>
        <FormControl fullWidth>
          <InputLabel id="data-category">Categoria</InputLabel>
          <Select labelId="data-category" value={data.category} label="Categoria" onChange={e => handleChangeCategory(e.target.value)}>
            {Object.keys(ContactDataCategory).map(category => (
              <MenuItem key={category} value={category}>{ContactDataCategory[category]}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth variant="outlined" label="Valor" defaultValue={data.value} onChange={e => handleChangeValue(e.target.value)}></TextField>
      </Grid>
    </Grid>
  )
}