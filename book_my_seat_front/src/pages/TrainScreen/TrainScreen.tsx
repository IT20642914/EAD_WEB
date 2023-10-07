import React, { useState } from 'react'
import style   from "./TrainScreen.module.scss";
import { Typography } from '@mui/material';
import { AppLayout } from '../../templates';
import { SheduleListFormDto, schedule, trainDetailsGridFormDto } from '../../utilities/models/trains.model';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utilities/constants';
import { TrainScreenForm } from '../../components/TrainScreen';
import { OptionsDto } from '../../utilities/models';
const TrainScreen = () => {
  const TRAIN_INFORMATION_FORM_INITIAL_STATE: trainDetailsGridFormDto = {
    trainId: { value: "", isRequired: false, disable: false, readonly: false, validator: "text", error: "", },
    trainName: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    firstClassSeatCount: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    secondClassSeatCount: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    thirdClassSeatCount: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    status: { value: false, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    trainType: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    startingStation: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    arrivingStation: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    trainLength: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
  };
  const Shedule_INFORMATION_FORM_INITIAL_STATE: SheduleListFormDto = {
    station: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    arrivalTime: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    departureTime: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    distanceFromStartPoint: { value: 0, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    stationId:{ value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
  };
  const navigate = useNavigate()

        const [screenMode, setScreenMode] = useState("");
        const [helperText, setHelperText] = useState(true);
        const [TrainInfomationForm, setTrainInfomationForm] = useState(TRAIN_INFORMATION_FORM_INITIAL_STATE);
        const [SheduleInfomationForm, setSheduleInfomationForm] = useState(Shedule_INFORMATION_FORM_INITIAL_STATE);
        const [SheduleData, setSheduleData] = useState<schedule[]>([]);
        const [isEdit, setisEdit] = useState(false);


        const handleInputFocus = (property: string, section: string) => {
          if (section === "GI")
          setTrainInfomationForm({
            ...TrainInfomationForm,
            [property]: {
              ...TrainInfomationForm[property as keyof typeof TrainInfomationForm],
              error: null,
            },
          });
      }
      const onInputHandleChange = (property: string, value: any) => {
        setHelperText(true);
        if (property === "trainName") {
          setTrainInfomationForm({
            ...TrainInfomationForm,
            trainName: {
              ...TrainInfomationForm.trainName,
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
          navigate(APP_ROUTES.TRAIN_MANAGEMENT)
      }
      const  setAsInitialState=() => {
        setTrainInfomationForm(TRAIN_INFORMATION_FORM_INITIAL_STATE)  
      }

      const handleTableClick=() => {

      }
      const handleShedule=(property:string) => {

      }
      const onClearDetails=() => {
        setSheduleInfomationForm(Shedule_INFORMATION_FORM_INITIAL_STATE)
      }


  return (
    <React.Fragment>
    <AppLayout componentTitle="New Traveler">
      <section className="page-root">
      <section className={style.sectionCard}>
          <section className={style.sectionCardHeader}>
            <Typography noWrap component="div" className={style.title}>
              <h3>Manage Trains</h3>
            </Typography>
          </section>
          <section className={style.sectionCardBody}>
          <section className={style.stepperRoot}>
          <TrainScreenForm
          isEdit={isEdit}
          onClearDetails={onClearDetails}
          handleShedule={handleShedule}
           
          handleTableClick={handleTableClick}
            helperText={helperText}
            TrainInfomationForm={TrainInfomationForm}
            SheduleInfomationForm={SheduleInfomationForm}
            screenMode={screenMode}
            SheduleData={SheduleData}
            onInputHandleChange={onInputHandleChange}
            handleInputFocus={handleInputFocus}/>
         </section>
         </section>
         
          </section>
        </section>
      </AppLayout>
    </React.Fragment>
  )
}

export default TrainScreen