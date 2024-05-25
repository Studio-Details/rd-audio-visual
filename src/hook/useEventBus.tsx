import eventBus from "@/function/eventBus"

// EventBusの機能を提供するhook
const _eventBus = eventBus<Record<string, any>>()
const useEventBus = () => {
  return _eventBus
}

export default useEventBus
