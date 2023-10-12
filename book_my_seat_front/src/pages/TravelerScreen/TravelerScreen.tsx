import React, { useState } from 'react'
import { AppLayout } from '../../templates'
import style from './TravelerScreen.module.scss'
import { Typography } from '@mui/material'
import GeneralInformation from '../../components/TravelerScreen/GeneralInformation/GeneralInformation'
import ContactInformation from '../../components/TravelerScreen/ContactInformation/ContactInformation'
import { CustomButton } from '../../components/Shared'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES, TRAIN_SCREEN_MODES } from '../../utilities/constants'
import { TravelerInformationFormDto, travelerDto } from '../../utilities/models/travellor.model'
import { SheduleListFormDto, schedule } from '../../utilities/models/trains.model'
import { OptionsDto } from '../../utilities/models'
import { validateFormData } from '../../utilities/helpers'
import { TravelersAction } from '../../redux/action/traveler'
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs'
const TravelerScreen = () => {

    const TRAVELLER_INFORMATION_FORM_INITIAL_STATE: TravelerInformationFormDto = {
      roleType :{ value: {}as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
        firstName: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        lastName: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        email: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        createdDate:{ value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        isActive: { value: false, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        contactHome: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        contactMobile: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        address: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        nICNumber: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        password:{ value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        travelerId:{ value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        totalReservationCount:{ value:0, isRequired: true, disable: false, readonly: false, validator: "number", error: "", },
      }; 
 
    
        const navigate = useNavigate()
        const dispatch = useDispatch()
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
    console.log("property",property,value)
    if (property === "userRole") {
      if (value == null) {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          roleType: {
            ...TravelloerInfomationForm.roleType,
            value: {} as OptionsDto,
          },
        });
      } else {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          roleType: {
            ...TravelloerInfomationForm.roleType,
            value: value,
          },
        });
      }
    }
    if (property === "identificationCard") {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          nICNumber: {
            ...TravelloerInfomationForm.nICNumber,
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
           isActive: {
            ...TravelloerInfomationForm. isActive,
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
      }if (property === "password") {
        setTravelloerInfomationForm({
          ...TravelloerInfomationForm,
          password: {
            ...TravelloerInfomationForm.password,
            value: value,
          },
        });
      }
 
  }
const  createNewRequest=async () => {
  const [validateData, isValid] = await validateFormData(TravelloerInfomationForm);
  setTravelloerInfomationForm(validateData);

  if (isValid) {
const payload:travelerDto={
  travelerId: '',
  firstName:TravelloerInfomationForm.firstName.value,
  lastName: TravelloerInfomationForm.lastName.value,
  email: TravelloerInfomationForm.email.value,
  isActive:TravelloerInfomationForm.isActive.value,
  contactHome: TravelloerInfomationForm.contactHome.value,
  contactMobile: TravelloerInfomationForm.contactMobile.value,
  address: TravelloerInfomationForm.address.value,
  totalReservationCount:0,
  createdDate: dayjs().toString(),
  roleType:{roleId:Number(TravelloerInfomationForm.roleType.value.value),roleName:TravelloerInfomationForm.roleType.value.label},
}


dispatch(TravelersAction.addTravelers(payload))
}

}
const  editRequest=async () => {
  const [validateData, isValid] = await validateFormData(TravelloerInfomationForm);
  setTravelloerInfomationForm(validateData);

  if(isValid){
    const payload:travelerDto={
      travelerId: TravelloerInfomationForm.travelerId.value,
      firstName:TravelloerInfomationForm.firstName.value,
      lastName: TravelloerInfomationForm.lastName.value,
      email: TravelloerInfomationForm.email.value,
      isActive:TravelloerInfomationForm.isActive.value,
      contactHome: TravelloerInfomationForm.contactHome.value,
      contactMobile: TravelloerInfomationForm.contactMobile.value,
      address: TravelloerInfomationForm.address.value,
      totalReservationCount:Number(TravelloerInfomationForm.address.value),
      createdDate: TravelloerInfomationForm.createdDate.value,
      roleType:{roleId:Number(TravelloerInfomationForm.roleType.value.value),roleName:TravelloerInfomationForm.roleType.value.label},
    }
    dispatch(TravelersAction.addTravelers(payload))
  }
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
                   {screenMode !== TRAIN_SCREEN_MODES.VIEW && (
                  <>
            
            {sessionStorage.getItem("Mode") ===
                      TRAIN_SCREEN_MODES.CREATE && (<>
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
                        </>)}
                 
                
                    
                        {sessionStorage.getItem("Mode") ===
                      TRAIN_SCREEN_MODES.EDIT && (
                        <CustomButton
                          text="Edit Traveller"
                          disabled={false}
                          isLoading={false}
                          onClick={editRequest}
                        />
                        )}

                  </>
               )}

              </section>
         </section>
          </section>
        </section>
      </AppLayout>
    </React.Fragment>
  )
}

export default TravelerScreen
function dispatch() {
  throw new Error('Function not implemented.')
}

