import { IProps as IAppType } from '../../components/AppInfo/AppListItem';
import { TSummaryInfo } from '../../components/Summary';

const summaryData: TSummaryInfo[] = [
  {
    icon: 'bar-chart',
    title: 'Revenue',
    value: '$510',
    badgeInfo: 12,
  },
  {
    icon: 'clock-circle',
    title: 'Impressions',
    value: '12.2M',
    badgeInfo: 8,
  },
  {
    icon: 'dashboard',
    title: 'Fill Rate',
    value: '37.5%',
    badgeInfo: 4,
  },
  {
    icon: 'bar-chart',
    title: 'ECPM',
    value: '$2.7',
    badgeInfo: -5,
  },
];

const appsData: IAppType[] = [
  {
    appTitle: 'TrackDemoAWE',
    revenue: 224,
    badgeInfo: 18,
    status: 'sandbox',
  },
  {
    appTitle: 'RacingDemoAdmix-2',
    revenue: 224,
    badgeInfo: -18,
    status: 'off',
  },
  {
    appTitle: 'TrackDemoAWE',
    revenue: 224,
    badgeInfo: 18,
    status: 'live',
  },
  {
    appTitle: 'RacingDemoAdmix2',
    revenue: 224,
    badgeInfo: 18,
    status: 'sandbox',
  },
  {
    appTitle: 'RacingDemoAdmix',
    revenue: 224,
    badgeInfo: 18,
    status: 'live',
  },
];

export { summaryData, appsData };
