import React, { useEffect, useState } from 'react'
import style from "./TrainScreen.module.scss";
import { Typography } from '@mui/material';
import { AppLayout } from '../../templates';
import { SheduleListFormDto, schedule, station, trainDetailsGridFormDto, traindetailsDto } from '../../utilities/models/trains.model';
import { useNavigate } from 'react-router-dom';
import { APP_ACTION_STATUS, APP_ROUTES, TRAIN_SCREEN_MODES } from '../../utilities/constants';
import { TrainScreenForm } from '../../components/TrainScreen';
import { ApplicationStateDto, OptionsDto } from '../../utilities/models';
import { validateFormData } from '../../utilities/helpers';
import { CustomButton } from '../../components/Shared';
import { StationAction } from '../../redux/action/station.Action';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { TrainAction } from '../../redux/action/train.Action';
const TrainScreen = () => {
  const TRAIN_INFORMATION_FORM_INITIAL_STATE: trainDetailsGridFormDto = {
    trainId: { value: "", isRequired: false, disable: false, readonly: false, validator: "text", error: "", },
    trainName: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    firstClassSeatCount: { value: 0, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    secondClassSeatCount: { value: 0, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    thirdClassSeatCount: { value: 0, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    isActive: { value: false, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    trainType: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    startingStation: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    arrivingStation: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    trainLength: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    totalCount: { value: 0, isRequired: false, disable: false, readonly: false, validator: "text", error: "", },
  };
  const Shedule_INFORMATION_FORM_INITIAL_STATE: SheduleListFormDto = {
    station: { value: {} as OptionsDto, isRequired: true, disable: false, readonly: false, validator: "object", error: "", },
    arrivalTime: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    departureTime: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    distanceFromStartPoint: { value: 0, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    stationId: { value: "", isRequired: false, disable: false, readonly: false, validator: "text", error: "", },
  };
  const navigate = useNavigate()

  const [screenMode, setScreenMode] = useState("");
  const [helperText, setHelperText] = useState(true);
  const [TrainInfomationForm, setTrainInfomationForm] = useState(TRAIN_INFORMATION_FORM_INITIAL_STATE);
  const [SheduleInfomationForm, setSheduleInfomationForm] = useState(Shedule_INFORMATION_FORM_INITIAL_STATE);
  const [SheduleData, setSheduleData] = useState<schedule[]>([]);
  const [Stations, setStations] = useState<station[]>([]);
  const [isEdit, setisEdit] = useState(false);
  const dispatch = useDispatch()

  const StationList = useSelector((state: ApplicationStateDto) => state.station.getAllStation);
  const addTrainResponse = useSelector((state: ApplicationStateDto) => state.train.addTrainDetails);
  const RequestByIdResponse = useSelector((state: ApplicationStateDto) => state.train.getDetailsById);
  const EditRequestByIdResponse = useSelector((state: ApplicationStateDto) => state.train.updatetrainDetailsByid);

  useEffect(() => {

    GetInitialData()
   
  }, [])

useEffect(() => {
  if(EditRequestByIdResponse.status===APP_ACTION_STATUS.SUCCESS){
    navigate(APP_ROUTES.TRAIN_MANAGEMENT)
  }

}, [EditRequestByIdResponse.status])



  useEffect(() => {
   if(addTrainResponse.status===APP_ACTION_STATUS.SUCCESS){
    navigate(APP_ROUTES.TRAIN_MANAGEMENT)

   }
  }, [addTrainResponse.status])
  
  useEffect(() => {
    if (APP_ACTION_STATUS.SUCCESS === StationList.status) {
      setStations(StationList.data)
    }

  }, [StationList.status])



  useEffect(() => {
    let totalCount = Number(TrainInfomationForm.firstClassSeatCount.value) + Number(TrainInfomationForm.secondClassSeatCount.value) + Number(TrainInfomationForm.thirdClassSeatCount.value)
    setTrainInfomationForm({
      ...TrainInfomationForm,
      totalCount: {
        ...TrainInfomationForm.totalCount,
        value: totalCount,
      },
    });

  }, [TrainInfomationForm.firstClassSeatCount, TrainInfomationForm.secondClassSeatCount, TrainInfomationForm.thirdClassSeatCount])


const GetInitialData =()=>{
  const _mode = sessionStorage.getItem("Mode");
    if (_mode !== null) setScreenMode(_mode);
    dispatch(StationAction.getAllStations());
    dispatch(TrainAction.getTrainByIdClear());
    
    const _id = sessionStorage.getItem("id");

    if ( _mode === TRAIN_SCREEN_MODES.VIEW || _mode === TRAIN_SCREEN_MODES.EDIT) {

      if (_id) dispatch(TrainAction.getTrainById(_id));
    }

}
useEffect(() => {
  if(RequestByIdResponse.status===APP_ACTION_STATUS.SUCCESS){
  
    const _mode = sessionStorage.getItem("Mode");
    const _data:traindetailsDto =RequestByIdResponse.data
    const _shedule= _data.trainShedule

    setSheduleData(_shedule)

   
    const _isDisable = _mode === TRAIN_SCREEN_MODES.VIEW;

    setTrainInfomationForm({...TrainInfomationForm,
      trainType:{
        ...TrainInfomationForm.arrivingStation,
        value:{label:_data.trainType.typeName ,value:_data.trainType.typeID }as OptionsDto,
        readonly:_isDisable
      },
      trainLength:{
        ...TrainInfomationForm.trainLength,
        value:_data.trainLength,
        readonly:_isDisable
      },
                  arrivingStation:{
                    ...TrainInfomationForm.arrivingStation,
                    value:{label:_data.arrivalStation.stationName ,value:_data.arrivalStation.stationId }as OptionsDto,
                    readonly:_isDisable
                  },
                  isActive:{
                    ...TrainInfomationForm.isActive,
                  value:_data.isActive,
                  readonly:_isDisable
                  },
                  trainName:{
                    ...TrainInfomationForm.trainName,
                  value:_data.trainName,
                  readonly:_isDisable
                  },
                  firstClassSeatCount:{
                    ...TrainInfomationForm.firstClassSeatCount,
                  value:Number(_data.firstClassSeatCount),
                  readonly:_isDisable
                  },
                  secondClassSeatCount:{
                    ...TrainInfomationForm.secondClassSeatCount,
                  value:Number(_data.secondClassSeatCount),
                  readonly:_isDisable
                  },
                  startingStation :{
                    ...TrainInfomationForm.startingStation,
                  value:{label:_data.departureStation.stationName  ,value:_data.departureStation.stationId }as OptionsDto,
                  readonly:_isDisable
                  },
                  thirdClassSeatCount:{
                    ...TrainInfomationForm.thirdClassSeatCount,
                  value:Number(_data.thirdClassSeatCount),
                  readonly:_isDisable
                  },
                  trainId:{
                    ...TrainInfomationForm.trainId,
                    value:_data.trainId,
                    readonly:_isDisable
                  }
                  
    })
   
  }
 
}, [ RequestByIdResponse.status, ])




  const handleInputFocus = (property: string, section: string) => {
    console.log("property", property)
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
    if (property === "trainType") {
      if (value === null) {
        setTrainInfomationForm({
          ...TrainInfomationForm,
          trainType: {
            ...TrainInfomationForm.trainType,
            value: {} as OptionsDto,
          },
        });
      } else {
        setTrainInfomationForm({
          ...TrainInfomationForm,
          trainType: {
            ...TrainInfomationForm.trainType,
            value: value,
          },
        });
      }
    }
    if (property === "trainLength") {
      setTrainInfomationForm({
        ...TrainInfomationForm,
        trainLength: {
          ...TrainInfomationForm.trainLength,
          value: value,
        },
      });
    }
    if (property === "status") {
      setTrainInfomationForm({
        ...TrainInfomationForm,
        isActive: {
          ...TrainInfomationForm.isActive,
          value: !value,
        },
      });
    }
    if (property === "firstClassSeatCount") {
      setTrainInfomationForm({
        ...TrainInfomationForm,
        firstClassSeatCount: {
          ...TrainInfomationForm.firstClassSeatCount,
          value: value,
        },
      });
    }
    if (property === "secondClassSeatCount") {
      setTrainInfomationForm({
        ...TrainInfomationForm,
        secondClassSeatCount: {
          ...TrainInfomationForm.secondClassSeatCount,
          value: value,
        },
      });
    }
    if (property === "thirdClassSeatCount") {
      setTrainInfomationForm({
        ...TrainInfomationForm,
        thirdClassSeatCount: {
          ...TrainInfomationForm.thirdClassSeatCount,
          value: value,
        },
      });
    }
    if (property === "arrivingStation") {
      setTrainInfomationForm({
        ...TrainInfomationForm,
        arrivingStation: {
          ...TrainInfomationForm.arrivingStation,
          value: value,
        },
      });
    }
    if (property === "startingStation") {
      if (value === null) {
        setTrainInfomationForm({
          ...TrainInfomationForm,
          startingStation: {
            ...TrainInfomationForm.startingStation,
            value: {} as OptionsDto,
          },
        });
      } else {
        setTrainInfomationForm({
          ...TrainInfomationForm,
          startingStation: {
            ...TrainInfomationForm.startingStation,
            value: value,
          },
        });
      }

    }
    if (property === "station") {
      if (value === null) {
        setSheduleInfomationForm({
          ...SheduleInfomationForm,
          station: {
            ...SheduleInfomationForm.station,
            value: {} as OptionsDto,
          },
        });
      } else {
        setSheduleInfomationForm({
          ...SheduleInfomationForm,
          station: {
            ...SheduleInfomationForm.station,
            value: value,
            error: null,
          },
        });
      }

    } if (property === "departureTime") {
      setSheduleInfomationForm({
        ...SheduleInfomationForm,
        departureTime: {
          ...SheduleInfomationForm.departureTime,
          value: value,
          error: null,
        },
      });
    } if (property === "arrivalTime") {
      setSheduleInfomationForm({
        ...SheduleInfomationForm,
        arrivalTime: {
          ...SheduleInfomationForm.arrivalTime,
          value: value,
          error: null,
        },
      });
    } if (property === "distanceFromStartPoint") {
      setSheduleInfomationForm({
        ...SheduleInfomationForm,
        distanceFromStartPoint: {
          ...SheduleInfomationForm.distanceFromStartPoint,
          value: value,
          error: null,
        },
      });
    }

  }


  const createNewRequest = async () => {
    const [validateData, isValid] = await validateFormData(TrainInfomationForm);
    setTrainInfomationForm(validateData);


    if (isValid) {

      const _payload: traindetailsDto = {
        trainId: '',
        trainType: {
          typeID: Number(TrainInfomationForm.trainType.value.value),
          typeName: TrainInfomationForm.trainType.value.label
        },
        trainLength: TrainInfomationForm.trainLength.value,
        isActive: TrainInfomationForm.isActive.value,
        departureStation: {
          stationName: TrainInfomationForm.startingStation.value.label,
          stationId: TrainInfomationForm.startingStation.value.value.toString()
        },
        arrivalStation: {
          stationName: TrainInfomationForm.arrivingStation.value.label,
          stationId: TrainInfomationForm.arrivingStation.value.value.toString()
        },
        firstClassSeatCount: TrainInfomationForm.firstClassSeatCount.value.toString(),
        secondClassSeatCount: TrainInfomationForm.secondClassSeatCount.value.toString(),
        thirdClassSeatCount: TrainInfomationForm.thirdClassSeatCount.value.toString(),
        trainShedule: SheduleData,
        trainName: TrainInfomationForm.trainName.value
      }
    

dispatch(TrainAction.addTrainDetails(_payload));

    }

  }
  const editRequest = async () => {
    const [validateData, isValid] = await validateFormData(TrainInfomationForm);
    setTrainInfomationForm(validateData);


    if (isValid) {

      const _payload: traindetailsDto = {
        trainId: TrainInfomationForm.trainId.value,
        trainType: {
          typeID: Number(TrainInfomationForm.trainType.value.value),
          typeName: TrainInfomationForm.trainType.value.label
        },
        trainLength: TrainInfomationForm.trainLength.value,
        isActive: TrainInfomationForm.isActive.value,
        departureStation: {
          stationName: TrainInfomationForm.startingStation.value.label,
          stationId: TrainInfomationForm.startingStation.value.value.toString()
        },
        arrivalStation: {
          stationName: TrainInfomationForm.arrivingStation.value.label,
          stationId: TrainInfomationForm.arrivingStation.value.value.toString()
        },
        firstClassSeatCount: TrainInfomationForm.firstClassSeatCount.value.toString(),
        secondClassSeatCount: TrainInfomationForm.secondClassSeatCount.value.toString(),
        thirdClassSeatCount: TrainInfomationForm.thirdClassSeatCount.value.toString(),
        trainShedule: SheduleData,
        trainName: TrainInfomationForm.trainName.value
      }
    
      dispatch(TrainAction.trainEditeByid(_payload));

    }

  }
  const onClose = () => {
    navigate(APP_ROUTES.TRAIN_MANAGEMENT)
  }
  const setAsInitialState = () => {
    setTrainInfomationForm(TRAIN_INFORMATION_FORM_INITIAL_STATE)
  }

  const handleTableClick = (indexValue: number, property: string) => {
  
console.log("property",property)

if(property==="Delete"){
  const filteredSchedule = SheduleData.filter((item,index) => {return index !== indexValue});
  setSheduleData(filteredSchedule)
} 
if(property==="Edite"){
  const filteredSchedule:schedule[] = SheduleData.filter((item,index) => {return index === indexValue});
  // setSheduleData(filteredSchedule) 

  const parsedDepartureTime = dayjs(filteredSchedule[0].departureAt, "HH:mm A");
  const parsedArrivalTime = dayjs(filteredSchedule[0].arrivalAt, "HH:mm A");
  const Station =Stations.filter(item => item.stationId===filteredSchedule[0].stationId)
  console.log("Station",Station)
  setSheduleInfomationForm({
    ...SheduleInfomationForm,
    arrivalTime:{
      ...SheduleInfomationForm.arrivalTime,
      value:parsedArrivalTime.toString(),

    },departureTime:{
      ...SheduleInfomationForm.departureTime,
      value:parsedDepartureTime.toString(),
    },
    stationId:{
      ...SheduleInfomationForm.stationId,
      value:filteredSchedule[0].stationId,
    },
    station:{
      ...SheduleInfomationForm.station,
      value:{ label:Station[0].stationName,value:Station[0].stationId} as OptionsDto
    },
    distanceFromStartPoint:{
      ...SheduleInfomationForm.distanceFromStartPoint,
      value:filteredSchedule[0].distanceFromStartPoint,
    }


  })
}

 

  }
  const handleShedule = async (property: string) => {
    const [validateData, isValid] = await validateFormData(SheduleInfomationForm);
    setSheduleInfomationForm(validateData);
console.log("isValid" ,isValid,validateData)
    if (isValid) {
      const _depatureAt = dayjs(SheduleInfomationForm.departureTime.value).add(5, 'hour').add(30, 'minute').format("HH:mm A").toString();
      const _arrvalAtAt = dayjs(SheduleInfomationForm.arrivalTime.value).add(5, 'hour').add(30, 'minute').format("HH:mm A" ).toString();
      const tableData: schedule = {
        stationId: SheduleInfomationForm.station.value.value.toString(),
        stationName: SheduleInfomationForm.station.value.label,
        arrivalAt: _arrvalAtAt,
        departureAt: _depatureAt,
        distanceFromStartPoint:SheduleInfomationForm.distanceFromStartPoint.value
      }
      setSheduleData([...SheduleData, tableData]);

      setSheduleInfomationForm(Shedule_INFORMATION_FORM_INITIAL_STATE)
    }


  }
  const onClearDetails = () => {
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
                  Stations={Stations}
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
                  handleInputFocus={handleInputFocus} />
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
                          text="ADD Train Details"
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
                          text="Edit Train Details"
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

export default TrainScreen