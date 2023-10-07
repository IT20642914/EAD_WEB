import moment from 'moment'

export const validateFormData = async (data: { [key: string]: any }): Promise<[any, boolean]> => {
  let isValid = true
  let validatedData = data

  return new Promise((resolve) => {
    for (const [field, fieldData] of Object.entries(data)) {
      if (fieldData.validator === 'text') {
        let error = null
        if (fieldData.isRequired && !fieldData.value) {
          error = 'This field is required.'
          isValid = false
        } else if (fieldData.value) {
          if (fieldData.charLength !== undefined) {
            if (!fieldData.charLength.includes(fieldData.value.length)) {
              error = `Character length should be one of: ${fieldData.charLength.join(', ')}.`;
              if(fieldData.charLength.length===1){      
                error = `Character length should be ${fieldData.charLength.join(', ')}.`;
              }
              isValid = false;
            }
          }
          if (fieldData.max !== undefined) {
            if (fieldData.value.length > fieldData.max) {
              error = `Character length should be less than ${fieldData.max}.`
              isValid = false
            }
          }
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error: error
          }
        }
      }

      if (fieldData.validator === 'number') {
        let error = null
        if (fieldData.isRequired && !fieldData.value) {
          error = 'This field is required.'
          isValid = false
        } else if (fieldData.value) {
          if (isNaN(fieldData.value)) {
            error = 'Invalid Input.'
            isValid = false
          }
          if (fieldData.charLength !== undefined) {
           
            if (!fieldData.charLength.includes(fieldData.value.length)) {
              error = `Character length should be one of: ${fieldData.charLength.join(', ')}.`;
              if(fieldData.charLength.length===1){
                error = `Character length should be ${fieldData.charLength.join(', ')}.`;
              }
              isValid = false;
            }
          }
          if (fieldData.max !== undefined) {
            if (fieldData.value.length > fieldData.max) {
              error = `Character length should be less than ${fieldData.max}.`
              isValid = false
            }
          }
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error: error
          }
        }
      }

      if (fieldData.validator === 'date') {
        let error = null
        if (fieldData.isRequired && (!fieldData.value || (!moment(fieldData.value).isValid()))) {
          error = 'This valid date is required.'
          isValid = false
        }

        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error: error
          }
        }
      }

      if (fieldData.validator === 'dates') {
        let error = null
        if (fieldData.isRequired && !(fieldData.value.length > 0)) {
          error = 'This date/s are required.'
          isValid = false
        }

        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error: error
          }
        }
      }

      if (fieldData.validator === 'object') {
        let error = null
        if (fieldData.isRequired && (!fieldData.value || fieldData.value.value === 0 || (!!fieldData.value && Object.keys(fieldData.value).length === 0 && fieldData.value.constructor === Object))) {
          error = 'This field is required.'
          isValid = false
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error: error
          }
        }
      }
      if (fieldData.validator === 'array') {
        let error = null
        if (!!fieldData.value && fieldData.value.length === 0 && fieldData.isRequired) {
          error = 'This field is required.'
          isValid = false
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error: error
          }
        }
      }

      if (fieldData.validator === 'email') {
        let error = null
        if (fieldData.isRequired && !fieldData.value) {
          error = 'This field is required.'
          isValid = false
        }
        if (fieldData.value) {
          const lastAtPos = fieldData.value.lastIndexOf('@')
          const lastDotPos = fieldData.value.lastIndexOf('.')
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fieldData.value.indexOf('@@') === -1 && lastDotPos > 2 && (fieldData.value.length - lastDotPos) > 2)) {
            isValid = false
            error = 'Invalid email ID'
          }
        }
        validatedData = {
          ...validatedData,
          [field]: {
            ...fieldData as {},
            error: error
          }
        }
      }
    }
    if (validatedData.max !== undefined && validatedData.max.value !== '' && validatedData.min.value !== '') {
      if (Number(validatedData.max.value) <= Number(validatedData.min.value)) {
        validatedData = {
          ...validatedData,
          max: {
            ...validatedData.max,
            error: 'Should be > Min value'
          },
          min: {
            ...validatedData.min,
            error: 'Should be < Max value'
          }
        }
        isValid = false
      }
    }
    resolve([validatedData, isValid])
  })
}
