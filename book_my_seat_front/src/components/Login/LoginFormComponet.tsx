import { Grid } from '@mui/material'
import React from 'react'
import { StyledTextField } from '../../assets/theme/theme'
import { LoginFormDto } from '../../utilities/models'

const LoginForm :React.FC<{
  helperText: boolean
    LoginForm:LoginFormDto 
    onInputHandleChange(property: string, value: any): void;
    handleInputFocus(property: string, section: string): void
}> =(props) => {

 const  userName=props.LoginForm.userName
 const  passWord=props.LoginForm.passWord
  return (
       <Grid container spacing={4}>
           <Grid item xs={12} md={12}>
            <StyledTextField
                     fullWidth
                      label="User Name"
                      placeholder='Enter User Name'
                      size='small'
                      value={userName.value}
                      error={!!userName.error}
                      disabled={userName.disable}
                      required={userName.isRequired}
                      helperText={props.helperText && userName.error}
                      onFocus={() => props.handleInputFocus('userName', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>props.onInputHandleChange('userName', event.target.value)}
                    />
          </Grid>
          <Grid item xs={12} md={12}>
            <StyledTextField
                   fullWidth
                      label="Password"
                      placeholder='Enter Password'
                      size='small'
                      value={passWord.value}
                      error={!!passWord.error}
                      disabled={passWord.disable}
                      required={passWord.isRequired}
                      helperText={props.helperText && passWord.error}
                      onFocus={() => props.handleInputFocus('passWord', 'GI')}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>props.onInputHandleChange('passWord', event.target.value)}
                    />
          </Grid>
          </Grid>
  )
}

export default LoginForm