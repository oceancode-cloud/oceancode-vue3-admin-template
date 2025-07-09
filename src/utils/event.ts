export function emitEvent(event, eventKey, option,e){
  event.emitEvent(eventKey,option)
  if(e){
    e.preventDefault();
    e.stopPropagation();
  }
}