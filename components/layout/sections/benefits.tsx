"use client"

import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, 
  Users, 
  Phone, 
  Calendar, 
  DollarSign, 
  Activity, 
  BarChart2,
  PieChart
} from 'lucide-react';

// Sample data - in a real app this would come from APIs
const websiteTrafficData = [
  { name: 'Jan', visitors: 1200, newUsers: 780, pageViews: 3600, bounceRate: 45 },
  { name: 'Feb', visitors: 1350, newUsers: 820, pageViews: 4100, bounceRate: 43 },
  { name: 'Mar', visitors: 1460, newUsers: 890, pageViews: 4300, bounceRate: 42 },
  { name: 'Apr', visitors: 1580, newUsers: 940, pageViews: 4800, bounceRate: 40 },
  { name: 'May', visitors: 1620, newUsers: 980, pageViews: 5100, bounceRate: 38 },
  { name: 'Jun', visitors: 1750, newUsers: 1050, pageViews: 5400, bounceRate: 37 },
];

const leadConversionData = [
  { name: 'Jan', formSubmissions: 68, phoneCallLeads: 42, totalLeads: 110, conversionRate: 9.1 },
  { name: 'Feb', formSubmissions: 72, phoneCallLeads: 48, totalLeads: 120, conversionRate: 8.9 },
  { name: 'Mar', formSubmissions: 78, phoneCallLeads: 52, totalLeads: 130, conversionRate: 8.9 },
  { name: 'Apr', formSubmissions: 82, phoneCallLeads: 58, totalLeads: 140, conversionRate: 8.9 },
  { name: 'May', formSubmissions: 85, phoneCallLeads: 65, totalLeads: 150, conversionRate: 9.3 },
  { name: 'Jun', formSubmissions: 92, phoneCallLeads: 68, totalLeads: 160, conversionRate: 9.1 },
];

const adPerformanceData = [
  { name: 'Facebook', spend: 2200, leads: 68, cpl: 32.35, roi: 248 },
  { name: 'Google', spend: 3100, leads: 104, cpl: 29.81, roi: 295 },
  { name: 'Instagram', spend: 1800, leads: 52, cpl: 34.62, roi: 189 },
  { name: 'Local SEO', spend: 1500, leads: 46, cpl: 32.61, roi: 203 },
];

// Analytics summary metrics
const analyticsSummary = [
  {
    title: "Website Traffic",
    metric: "1,750",
    change: "+8.2%",
    description: "Monthly visitors",
    icon: Users,
    trend: "up"
  },
  {
    title: "Lead Conversion",
    metric: "9.1%",
    change: "+0.5%",
    description: "Visitor to lead rate",
    icon: TrendingUp,
    trend: "up"
  },
  {
    title: "Appointment Bookings",
    metric: "142",
    change: "+12.5%",
    description: "New appointments",
    icon: Calendar,
    trend: "up"
  },
  {
    title: "Marketing ROI",
    metric: "235%",
    change: "+15.2%",
    description: "Return on ad spend",
    icon: DollarSign,
    trend: "up"
  },
];

export const DentalAnalyticsDashboard = () => {
  const [dateRange, setDateRange] = useState('6m');

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dental Marketing Analytics</h1>
          <p className="text-muted-foreground mt-1">Monitor your marketing performance and patient acquisition</p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="bg-muted rounded-md p-1">
            <button 
              className={`px-3 py-1 rounded-md ${dateRange === '30d' ? 'bg-background' : ''}`} 
              onClick={() => setDateRange('30d')}
            >
              30 Days
            </button>
            <button 
              className={`px-3 py-1 rounded-md ${dateRange === '3m' ? 'bg-background' : ''}`} 
              onClick={() => setDateRange('3m')}
            >
              3 Months
            </button>
            <button 
              className={`px-3 py-1 rounded-md ${dateRange === '6m' ? 'bg-background' : ''}`} 
              onClick={() => setDateRange('6m')}
            >
              6 Months
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {analyticsSummary.map((item) => (
          <Card key={item.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.metric}</div>
              <p className="text-xs text-muted-foreground">
                <span className={item.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                  {item.change}
                </span> {" "}
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="traffic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="traffic">
            <Users className="h-4 w-4 mr-2" />
            Website Traffic
          </TabsTrigger>
          <TabsTrigger value="leads">
            <Phone className="h-4 w-4 mr-2" />
            Lead Conversion
          </TabsTrigger>
          <TabsTrigger value="ads">
            <BarChart2 className="h-4 w-4 mr-2" />
            Ad Performance
          </TabsTrigger>
        </TabsList>

        {/* Website Traffic Tab */}
        <TabsContent value="traffic" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Visitor Traffic Trends</CardTitle>
                <CardDescription>Monthly website visitors and new users</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={websiteTrafficData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="visitors" stroke="#8884d8" activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="newUsers" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Page Performance</CardTitle>
                <CardDescription>Pageviews and bounce rate</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={websiteTrafficData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="pageViews" stroke="#8884d8" />
                      <Line yAxisId="right" type="monotone" dataKey="bounceRate" stroke="#ff7300" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Lead Conversion Tab */}
        <TabsContent value="leads" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Lead Sources</CardTitle>
                <CardDescription>Form submissions vs. phone calls</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={leadConversionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="formSubmissions" fill="#8884d8" name="Form Submissions" activeBar={{ enableBackground: 'no' }} />
                      <Bar dataKey="phoneCallLeads" fill="#82ca9d" name="Phone Calls" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate</CardTitle>
                <CardDescription>Percentage of visitors that become leads</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={leadConversionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 12]} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="conversionRate" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Ad Performance Tab */}
        <TabsContent value="ads" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Ad Spend by Platform</CardTitle>
                <CardDescription>Marketing budget allocation</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={adPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="spend" fill="#8884d8" name="Ad Spend ($)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ROI by Marketing Channel</CardTitle>
                <CardDescription>Return on investment percentage</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={adPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="roi" fill="#82ca9d" name="ROI (%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Channel Performance Comparison</CardTitle>
              <CardDescription>Cost per lead and lead count by platform</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={adPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="leads" fill="#8884d8" name="Total Leads" />
                    <Bar yAxisId="right" dataKey="cpl" fill="#ff7300" name="Cost per Lead ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DentalAnalyticsDashboard;