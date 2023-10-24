import React, { useEffect, useState } from 'react'
import { AppLayout } from '../../templates'
import style from './TravelerScreen.module.scss'
import { Typography } from '@mui/material'
import GeneralInformation from '../../components/TravelerScreen/GeneralInformation/GeneralInformation'
import ContactInformation from '../../components/TravelerScreen/ContactInformation/ContactInformation'
import { CustomButton } from '../../components/Shared'
import { useNavigate } from 'react-router-dom'
import { APP_ACTION_STATUS, APP_ROUTES, TRAIN_SCREEN_MODES } from '../../utilities/constants'
import { TravelerInformationFormDto, travelerDto } from '../../utilities/models/travellor.model'
import { SheduleListFormDto, schedule } from '../../utilities/models/trains.model'
import { ApplicationStateDto, OptionsDto } from '../../utilities/models'
import { validateFormData } from '../../utilities/helpers'
import { TravelersAction } from '../../redux/action/traveler'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import ConfirmationDialog from '../../components/Shared/ConfirmationDialog/ConfirmationDialog'
const TravelerScreen = () => {

    const TRAVELLER_INFORMATION_FORM_INITIAL_STATE: TravelerInformationFormDto = {
      roleType :{ value: {}as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
        firstName: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        lastName: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        email: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        createdDate:{ value: "", isRequired: false, disable: false, readonly: false, validator: "text", error: "", },
        isActive: { value: true, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        contactHome: { value: "", isRequired: false, disable: false, readonly: false, validator: "text", error: "", },
        contactMobile: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        address: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        nICNumber: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        password:{ value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        travelerId:{ value: "", isRequired: false, disable: false, readonly: false, validator: "text", error: "", },
        totalReservationCount:{ value:0, isRequired: false, disable: false, readonly: false, validator: "number", error: "", },
      }; 
 
    
        const navigate = useNavigate()
        const dispatch = useDispatch()
        const [screenMode, setScreenMode] = useState("");
        const [helperText, setHelperText] = useState(true);
        const [TravelloerInfomationForm, setTravelloerInfomationForm] = useState(TRAVELLER_INFORMATION_FORM_INITIAL_STATE);

   
        const travelerAddResponse = useSelector((state: ApplicationStateDto) => state.traveler.addTravelers);
        const travelerByiDesponse = useSelector((state: ApplicationStateDto) => state.traveler.getTravelerByID);
        const travelerUpdatebyRequestResponse = useSelector((state: ApplicationStateDto) => state.traveler.updateTravelerByID);
        const getTripDetailsResponse = useSelector((state: ApplicationStateDto) => state.train.getTripDetails);
      
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
        
    
  useEffect(() => {
    GetInitialData()
  }, [])
         
const GetInitialData =()=>{
  const _mode = sessionStorage.getItem("Mode");
    if (_mode !== null) setScreenMode(_mode);
    dispatch(TravelersAction.travelerByIDClear())
    // dispatch(StationAction.getAllStations());

    const _id = sessionStorage.getItem("id");
    console.log("_mode",_mode)
    if ( _mode === TRAIN_SCREEN_MODES.VIEW || _mode === TRAIN_SCREEN_MODES.EDIT) {
      if (_id) dispatch(TravelersAction.travelerByID(_id));
    }

}

useEffect(() => {
if(travelerByiDesponse.status===APP_ACTION_STATUS.SUCCESS){
 
  const _mode = sessionStorage.getItem("Mode");
  const role = sessionStorage.getItem("userRole");

const _data:travelerDto=travelerByiDesponse.data
const _isDisable = _mode === TRAIN_SCREEN_MODES.VIEW

setTravelloerInfomationForm({
  ...TravelloerInfomationForm,
  travelerId:{
    ...TravelloerInfomationForm.travelerId,
    value:_data.travelerId ,
    readonly:_isDisable
  },
  address:{
    ...TravelloerInfomationForm.address,
    value:_data.address ,
    readonly:_isDisable
  },
  contactHome:{
    ...TravelloerInfomationForm.contactHome,
    value:_data.contactHome ,
    readonly:_isDisable
  },
  contactMobile:{
    ...TravelloerInfomationForm.contactMobile,
    value:_data.contactMobile ,
    readonly:_isDisable
  },
  createdDate:{
    ...TravelloerInfomationForm.createdDate,
    value:_data.createdDate ,
    readonly:_isDisable
  },
  email:{
    ...TravelloerInfomationForm.email,
    value:_data.email,
    readonly:_isDisable
  },
  firstName:{
    ...TravelloerInfomationForm.firstName,
    value:_data.firstName ,
    readonly:_isDisable
  },
  isActive:{
    ...TravelloerInfomationForm.isActive,
    value:_data.isActive ,
    readonly:_isDisable
  },
  lastName:{
    ...TravelloerInfomationForm.lastName,
    value:_data.lastName ,
    readonly:_isDisable
  },
  nICNumber:{
    ...TravelloerInfomationForm.nICNumber,
    value:_data.nicNumber,
    readonly:_isDisable
  },
  password:{
    ...TravelloerInfomationForm.password,
    value:_data.passWord ,
    readonly:_isDisable
  },
  totalReservationCount:{
    ...TravelloerInfomationForm.totalReservationCount,
    value:_data.totalReservationCount ,
    readonly:_isDisable
  },
  roleType:{
    ...TravelloerInfomationForm.roleType,
    value:{label:_data.roleType.roleName,value:Number(_data.roleType.roleID)}  as OptionsDto,
    readonly:_isDisable
  },



})

}
}, [travelerByiDesponse.status])


useEffect(() => {

  if(travelerUpdatebyRequestResponse.status===APP_ACTION_STATUS.SUCCESS){
    navigate(APP_ROUTES.TRAVELLER_MANAGEMENT)
  }
  
}, [travelerUpdatebyRequestResponse.status])

        useEffect(() => {
          if(travelerAddResponse.status==APP_ACTION_STATUS.SUCCESS){
            navigate(APP_ROUTES.TRAVELLER_MANAGEMENT)
          }
         }, [travelerAddResponse.status])
         
    
  const onInputHandleChange = (property: string, value: any) => {
    setHelperText(true);

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

  console.log("isValid",isValid,validateData)
  if (isValid) {
const payload:travelerDto={
  travelerId: '',
  firstName: TravelloerInfomationForm.firstName.value,
  lastName: TravelloerInfomationForm.lastName.value,
  email: TravelloerInfomationForm.email.value,
  isActive: TravelloerInfomationForm.isActive.value,
  contactHome: TravelloerInfomationForm.contactHome.value,
  contactMobile: TravelloerInfomationForm.contactMobile.value,
  address: TravelloerInfomationForm.address.value,
  totalReservationCount: 0,
  createdDate: dayjs().toString(),
  roleType: { roleID: Number(TravelloerInfomationForm.roleType.value.value), roleName: TravelloerInfomationForm.roleType.value.label },
  nicNumber: TravelloerInfomationForm.nICNumber.value,
  passWord: TravelloerInfomationForm.password.value,
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
      totalReservationCount:Number(TravelloerInfomationForm.totalReservationCount.value),
      createdDate: TravelloerInfomationForm.createdDate.value,
      nicNumber: TravelloerInfomationForm.nICNumber.value,
      passWord: TravelloerInfomationForm.password.value,
      roleType:{roleID:Number(TravelloerInfomationForm.roleType.value.value),roleName:TravelloerInfomationForm.roleType.value.label},
    }
    dispatch(TravelersAction.UpdateTraveler(payload))
  }
}
const  onClose=() => {
    setTravelloerInfomationForm(TRAVELLER_INFORMATION_FORM_INITIAL_STATE)  
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

