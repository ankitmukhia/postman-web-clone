import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface QueryParam {
  key: string;
  value: string;
}

function App() {
  const [url, setUrl] = useState<string>("");
  const [method, setMethod] = useState<string>("GET");
  const [currentTab, setCurrentTab] = useState<string>("body")
  const [queryParams, setQueryParams] = useState<QueryParam[]>([
    { key: "", value: "" },
  ])

  const removeQueryParam = (index: number) => {

  };

  const updateQueryParam = (
    index: number,
    field: "key" | "value",
    value: string
  ) => {

  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 space-y-4">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Request Section */}
        <Card className="p-4 space-y-4">
          <div className="flex gap-2 items-center">
            <Select value={method} onValueChange={setMethod}>
              <SelectTrigger className="w-[100px] focus-visible:ring-0">
                <SelectValue placeholder="Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="GET">GET</SelectItem>
                <SelectItem value="POST">POST</SelectItem>
                <SelectItem value="PUT">PUT</SelectItem>
                <SelectItem value="DELETE">DELETE</SelectItem>
                <SelectItem value="PATCH">PATCH</SelectItem>
              </SelectContent>
            </Select>
            <form
              className="flex w-full gap-2"
            >
              <Input
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="focus-visible:ring-0"
              />
              <Button
                type="submit"
                className="min-w-[100px]"
              >
	      Send
              </Button>
            </form>
          </div>

          <Tabs
            value={currentTab}
            onValueChange={setCurrentTab}
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="params">Query Params</TabsTrigger>
              <TabsTrigger value="body">Body</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="params" className="space-y-2">
              {queryParams.map((param, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <Input
                    placeholder="Key"
                    value={param.key}
                    onChange={(e) =>
                      updateQueryParam(index, "key", e.target.value)
                    }
                    className="focus-visible:ring-0"
                  />
                  <Input
                    placeholder="Value"
                    value={param.value}
                    onChange={(e) =>
                      updateQueryParam(index, "value", e.target.value)
                    }
                    className="focus-visible:ring-0"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeQueryParam(index)}
                    className="text-red-500"
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full mt-2"
              >
                Add Query Parameter
              </Button>
            </TabsContent>

            <TabsContent
              value="body"
              className="min-h-[200px] bg-white dark:bg-gray-800 rounded-md"
            >
	    Body Man
            </TabsContent>

            <TabsContent value="history" className="space-y-2">
	      History Man
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}

export default App;
