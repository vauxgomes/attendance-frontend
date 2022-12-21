// https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react

export default function formReducer(state, event) {
  if (event.reset) {
    return { ...event.states }
  }

  return {
    ...state,
    [event.name]: event.value
  }
}

export function handleFormChange(setFormData, e) {
  setFormData({ name: e.target.name, value: e.target.value })
}

export function handleFormReset(setFormData, states) {
  setFormData({ reset: true, states })
}
