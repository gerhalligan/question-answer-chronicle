import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Index = () => {
  // Sample data for the chart
  const growthData = [
    { year: 'Year 1', capacity: 100000 },
    { year: 'Year 2', capacity: 110000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AWS Infrastructure Report</h1>
          <p className="text-lg text-gray-600">Comprehensive Analysis of Regional Development</p>
        </div>

        {/* Key Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Region</h3>
            <p className="text-2xl font-bold text-blue-600">APJC</p>
            <p className="text-sm text-gray-500 mt-2">Asia Pacific & Japan</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Cluster</h3>
            <p className="text-2xl font-bold text-blue-600">SIN</p>
            <p className="text-sm text-gray-500 mt-2">Singapore</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-semibold mb-2">Infrastructure Type</h3>
            <p className="text-2xl font-bold text-blue-600">Expansion</p>
            <p className="text-sm text-gray-500 mt-2">Existing Region</p>
          </Card>
        </div>

        {/* Priority & Approach */}
        <Card className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Priority Level</h2>
              <Badge variant="secondary" className="text-lg">
                Tier 2
              </Badge>
              <p className="mt-2 text-gray-600">
                Significant impact on DCC priorities, including business continuity and expansion
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-bold mb-4">Engagement Approach</h2>
              <Badge variant="outline" className="text-lg">
                Keep warm/early engagement
              </Badge>
            </div>
          </div>
          <Separator className="my-6" />
          <div>
            <h2 className="text-xl font-bold mb-4">Location Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700">Primary Location</h3>
                <p className="text-lg">Tallaght, Dublin 24</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Location Type</h3>
                <p className="text-lg">Industrial</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Growth Chart */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Capacity Growth Projection</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="capacity" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Authorities */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Authorities and Jurisdiction</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold">South Dublin County Council</h3>
                <p className="text-sm text-gray-600">Local Authority</p>
              </div>
              <Badge>Primary AHJ</Badge>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-semibold">North City Council</h3>
                <p className="text-sm text-gray-600">Local Authority</p>
              </div>
              <Badge variant="outline">Secondary AHJ</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;