import React, { useState } from 'react'
import { AppLayout } from '../../templates'
import style from './TravelerScreen.module.scss'
import { Typography } from '@mui/material'
import GeneralInformation from '../../components/TravelerScreen/GeneralInformation/GeneralInformation'
import ContactInformation from '../../components/TravelerScreen/ContactInformation/ContactInformation'
import { CustomButton } from '../../components/Shared'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../utilities/constants'
import { TravellerInformationFormDto } from '../../utilities/models/travellor.model'
const TravelerScreen = () => {

    const TRAVELLER_INFORMATION_FORM_INITIAL_STATE: TravellerInformationFormDto = {
        firstName: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        lastName: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        email: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        userName: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        status: { value: false, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        contactHome: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        contactMobile: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        address: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        identificationCard: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    };

        const navigate = useNavigate()

        const [screenMode, setScreenMode] = useState("");
        const [helperText, setHelperText] = useState(true);
        const [TravelloerInfomationForm, setTravelloerInfomationForm] = useState(TRAVELLER_INFORMATION_FORM_INITIAL_STATE);
        
        const handleInputFocus = (property: string, section: string) => {
            if (section === "GI")
            setTravelloerInfomationForm({
              ...TravelloerInfomationForm,
              [property]: {
                ...TravelloerInfomationForm[property as keyof typeof TravelloerInfomationForm],
                error: null,
              },
            });
            

        }

  const onInputHandleChange = (property: string, value: any) => {
    setHelperText(true);
    
    if (property === "identificationCard") {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          identificationCard: {
            ...TravelloerInfomationForm.identificationCard,
            value: value,
          },
        });
      }
      if (property === "firstName") {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          firstName: {
            ...TravelloerInfomationForm.firstName,
            value: value,
          },
        });
      }
      
    if (property === "lastName") {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          lastName: {
            ...TravelloerInfomationForm.lastName,
            value: value,
          },
        });
      }
      
    if (property === "userName") {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          userName: {
            ...TravelloerInfomationForm.userName,
            value: value,
          },
        });
      }
      
    if (property === "email") {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          email: {
            ...TravelloerInfomationForm.email,
            value: value,
          },
        });
      }
      
    if (property === "address") {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          address: {
            ...TravelloerInfomationForm.address,
            value: value,
          },
        });
      }
      
    if (property === "contactHome") {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          contactHome: {
            ...TravelloerInfomationForm.contactHome,
            value: value,
          },
        });
      }
    
      if (property === "status") {
        
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
           status: {
            ...TravelloerInfomationForm. status,
            value: !value,
          },
        });
      }  if (property === "contactMobile") {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          contactMobile: {
            ...TravelloerInfomationForm.contactMobile,
            value: value,
          },
        });
      }
 
  }




const  createNewRequest=() => {
    
}
const  editRequest=() => {
    
}
const  onClose=() => {
    navigate(APP_ROUTES.TRAVELLER_MANAGEMENT)
}
const  setAsInitialState=() => {
    setTravelloerInfomationForm(TRAVELLER_INFORMATION_FORM_INITIAL_STATE)  
}

  return (
    <React.Fragment>
      <AppLayout componentTitle="New Traveler">
        <section className="page-root">
          <section className={style.sectionCard}>
            <section className={style.sectionCardHeader}>
              <Typography noWrap component="div" className={style.title}>
                <h3>Manage  Traveller </h3>
              </Typography>
            </section>
            <section className={style.sectionCardBody}>
            <section className={style.stepperRoot}>

                <GeneralInformation
                helperText={helperText}
                TravelloerInfomationForm={TravelloerInfomationForm}
                screenMode={screenMode}
                onInputHandleChange={onInputHandleChange}
                handleInputFocus={handleInputFocus}
                
                />

                <ContactInformation
                 helperText={helperText}
                 TravelloerInfomationForm={TravelloerInfomationForm}
                 screenMode={screenMode}
                 onInputHandleChange={onInputHandleChange}
                 handleInputFocus={handleInputFocus}
                />


                
              </section>
              <section className={style.sectionCardFooter}>
                <CustomButton
                  text="Close"
                  textColor="black"
                  bgColor="#bfbfbf"
                  onClick={onClose}
                />
                
                  <>
            
                        <>
                          <CustomButton
                            text="Clear"
                            border="1px solid #6e6e6e"
                            bgColor="#282828"
                            onClick={setAsInitialState}
                          />
                      
                          <CustomButton
                            text="Send Traveller"
                            disabled={false}
                            isLoading={
                             false
                            }
                            onClick={() => createNewRequest()}
                          />
                        </>
                 
                
                    
                        <CustomButton
                          text="Edit Traveller"
                          disabled={false}
                          isLoading={false}
                          onClick={editRequest}
                        />
                    
                  </>
            
              </section>
         </section>
          </section>
        </section>
      </AppLayout>
    </React.Fragment>
  )
}

export default TravelerScreen
