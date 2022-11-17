import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Registrar from './component/registrar';
import HeaderFormulario from './component/Header.registro';
import LayoutNoNav from '../../components/layout/LayoutNoNav';

function Registro() {
  return (
    <LayoutNoNav>
      <Grid container>
        <Grid xs display="flex" justifyContent="center">
          <Card
            sx={{
              px: '35px',
              borderRadius: '30px',
              backgroundColor: '#F3F3F3',
              boxShadow:
                '200px 132px 96px rgba(0, 0, 0, 0.01), 113px 74px 81px rgba(0, 0, 0, 0.05), 50px 33px 60px rgba(0, 0, 0, 0.09), 13px 8px 33px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);',
            }}
          >
            <HeaderFormulario />
            <Registrar />
          </Card>
        </Grid>
      </Grid>
    </LayoutNoNav>
  );
}

export default Registro;
