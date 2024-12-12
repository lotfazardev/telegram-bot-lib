import { BusinessOpeningHoursInterval } from './BusinessOpeningHoursInterval'

export interface BusinessOpeningHours {
  time_zone_name: string
  opening_hours: BusinessOpeningHoursInterval[]
}
