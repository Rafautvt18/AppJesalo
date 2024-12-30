import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const Couriers = () => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    birthday: '',
    phone: '',
    email: '',
    address: {
      street: '',
      state: '',
      country: '',
    },
    nationality: '',
    passports: '',
    baseCity: '',
    visas: '',
    bankName: '',
    bankAddress: '',
    swiftCode: '',
    accountNumber: '',
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddressChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };

  const handleSubmit = () => {
    console.log('Courier Registered:', form);
    alert('Courier Registered Successfully!');
    // Reset form after submission
    setForm({
      name: '',
      lastName: '',
      birthday: '',
      phone: '',
      email: '',
      address: {
        street: '',
        state: '',
        country: '',
      },
      nationality: '',
      passports: '',
      baseCity: '',
      visas: '',
      bankName: '',
      bankAddress: '',
      swiftCode: '',
      accountNumber: '',
    });
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main' }}>
        Courier Registration
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={3}>
          {/* Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              fullWidth
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              required
            />
          </Grid>
          {/* Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              fullWidth
              value={form.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              required
            />
          </Grid>
          {/* Birthday */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Birthday"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={form.birthday}
              onChange={(e) => handleChange('birthday', e.target.value)}
              required
            />
          </Grid>
          {/* Phone */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              fullWidth
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              required
            />
          </Grid>
          {/* Email Address */}
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              required
            />
          </Grid>
          {/* Address */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Street"
              fullWidth
              value={form.address.street}
              onChange={(e) => handleAddressChange('street', e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="State"
              fullWidth
              value={form.address.state}
              onChange={(e) => handleAddressChange('state', e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Country"
              fullWidth
              value={form.address.country}
              onChange={(e) => handleAddressChange('country', e.target.value)}
              required
            />
          </Grid>
          {/* Nationality */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nationality"
              fullWidth
              value={form.nationality}
              onChange={(e) => handleChange('nationality', e.target.value)}
              required
            />
          </Grid>
          {/* Passports */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Passports"
              fullWidth
              value={form.passports}
              onChange={(e) => handleChange('passports', e.target.value)}
              required
            />
          </Grid>
          {/* Base/City */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Base/City"
              fullWidth
              value={form.baseCity}
              onChange={(e) => handleChange('baseCity', e.target.value)}
              required
            />
          </Grid>
          {/* Visas */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Visas"
              fullWidth
              value={form.visas}
              onChange={(e) => handleChange('visas', e.target.value)}
              required
            />
          </Grid>
          {/* Bank Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Bank Name"
              fullWidth
              value={form.bankName}
              onChange={(e) => handleChange('bankName', e.target.value)}
              required
            />
          </Grid>
          {/* Bank Address */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Bank Address"
              fullWidth
              value={form.bankAddress}
              onChange={(e) => handleChange('bankAddress', e.target.value)}
              required
            />
          </Grid>
          {/* Swift Code */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="SWIFT Code"
              fullWidth
              value={form.swiftCode}
              onChange={(e) => handleChange('swiftCode', e.target.value)}
              required
            />
          </Grid>
          {/* Account Number */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Account Number"
              fullWidth
              value={form.accountNumber}
              onChange={(e) => handleChange('accountNumber', e.target.value)}
              required
            />
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
            Register Courier
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Couriers;
