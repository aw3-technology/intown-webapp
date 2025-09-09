import { Message } from '@/components/custom/chat-container';
import { FlightCard } from '@/components/custom/flight-card';
import { InformationHeader } from '@/components/custom/information-header';
import {
  ArrowUpRightIcon,
  Calendar1Icon,
  ChevronRightIcon,
  DownloadIcon,
  InfoIcon,
  LightbulbIcon,
  ShareIcon,
  SunMediumIcon,
  SunriseIcon,
  SunsetIcon,
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { HotelCard } from '@/components/custom/hotel-card';
import { flightData } from '@/temp-data/flight-data';
import { hotelData } from '@/temp-data/hotel-data';
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from '@/components/ui/timeline';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ExploreCard } from '@/components/custom/explore-card';
import { Divider } from '@/components/custom/divider';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { AirbnbIcon } from '@/components/custom/icons/airbnb-icon';
import { UnknownIcon } from '@/components/custom/icons/unknown-icon';
import { BookingIcon } from '@/components/custom/icons/booking-icon';
import { SkyscannerIcon } from '@/components/custom/icons/skyscanner-icon';
import { useAllFlightsDrawer } from './use-all-flights-drawer';
import { useAllAccomodationDrawer } from './use-all-accomodation-drawer';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export const useAssistantMessages = () => {
  const { setOpen } = useAllFlightsDrawer();
  const { setOpen: setAllAccomodationOpen } = useAllAccomodationDrawer();

  const messages: Message[] = [
    {
      id: 1,
      role: 'assistant',
      content:
        "Perfect! Here's your 5-day Los Angeles adventure for two – featuring Hollywood glamour, beach vibes, and stunning views. Let's explore LA:",
    },
    {
      id: 2,
      role: 'assistant',
      content: (
        <div className="flex flex-col gap-2">
          <h1 className='text-foreground/80'>
              Ready to explore Los Angeles?
          </h1>
        </div>
      ),
    },
    {
      id: 3,
      role: 'assistant',
      content: (
        <PhotoProvider>
            <div className="grid grid-cols-4 gap-1 md:gap-2 w-full rounded-2xl overflow-hidden">
              <div className="col-span-3 md:col-span-2 rounded-l-lg relative max-h-[360px]">
                
                <PhotoView src="/images/los-angeles-skyline.png">
                  <div className="absolute inset-0 bg-[url('/images/los-angeles-skyline.png')] bg-cover bg-center backdrop-blur-xl cursor-pointer hover:opacity-80 transition-opacity duration-300"></div>
                </PhotoView>
                <div className="absolute flex rounded-l-lg items-center justify-center bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/32 via-white/2 to-transparent backdrop-blur-[1px]">
                  <div className="flex absolute max-w-[206px] px-4 bottom-4 sm:bottom-8 items-center justify-center gap-2 flex-col">
                    
                    <h1 className="relative font-second text-2xl sm:text-5xl leading-11 tracking-tight text-white shadow-xl">
                      LOS ANGELES
                    </h1>
                    <div className="flex h-[31px] items-center justify-center bg-layout/50 px-4 py-2 rounded-full gap-2 backdrop-blur-[18px]">
                      <Calendar1Icon
                        size={14}
                        className="text-white font-semibold"
                      />
                      <span className="text-xs font-semibold text-white">
                        Mar 15
                      </span>
                      <span className="text-xs font-semibold text-white">
                        →
                      </span>
                      <span className="text-xs font-semibold text-white">
                        Mar 20
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-1 md:gap-2 max-h-[360px]">
                <div className="h-full w-full">
                  <PhotoView src="/images/los-angeles-hollywood.png">
                      <img
                        src="/images/los-angeles-hollywood.png"
                        alt="Hollywood Sign"
                        className="object-cover h-full w-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
                      />
                  </PhotoView>
                </div>

                <div className="h-full w-full">
                  <PhotoView src="/images/los-angeles-venice-canal.png">
                      <img
                        src="/images/los-angeles-venice-canal.png"
                        alt="Venice Beach"
                        className="object-cover h-full w-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
                      />
                  </PhotoView>
                </div>

                <div className="h-full w-full">
                  <PhotoView src="/images/los-angeles-griffith-observatory.png">
                    <img
                      src="/images/los-angeles-griffith-observatory.png"
                      alt="Griffith Observatory"
                      className="object-cover h-full w-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
                    />
                  </PhotoView>
                  
                </div>
                <div className="h-full w-full overflow-hidden relative">
                  <PhotoView src="/images/los-angeles-paramount-pictures.png">
                    <img
                      src="/images/los-angeles-paramount-pictures.png"
                      alt="Paramount Pictures"
                      className="object-cover h-full w-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
                    />
                  </PhotoView>
                  
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    +24
                  </div>
                </div>
              </div>
            </div>
        </PhotoProvider>
        
      ),
    },
    {
      id: 4,
      role: 'assistant',
      content: (
        <div className="flex flex-col gap-2">
          <p className="text-lg text-foreground">Los Angeles, California</p>
          <p className="text-foreground/70">
            Los Angeles is a sprawling city famous for Hollywood glamour,
            stunning beaches, and year-round sunshine. Explore the iconic
            Hollywood Sign, stroll down the Venice Beach Boardwalk, visit
            world-class museums, and indulge in diverse culinary experiences.
            From movie studios to mountain hikes, LA offers endless entertainment
            in the heart of Southern California!
          </p>
        </div>
      ),
    },
    {
      id: 5,
      role: 'assistant',
      content: (
        <div className="flex flex-col gap-2">
          <InformationHeader
            title="How to get there"
            secondTitle={
              <Select defaultValue="fastest">
                <SelectTrigger
                  size="sm"
                  className="border-none shadow-none bg cursor-pointer text-foreground/50 dark:dark:bg-transparent dark:dark:hover:bg-transparent"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fastest">Fastest</SelectItem>
                  <SelectItem value="cheapest">Cheapest</SelectItem>
                  <SelectItem value="best-rated">Best Rated</SelectItem>
                </SelectContent>
              </Select>
            }
            extra={
              <Button
                variant="link"
                onClick={() => setOpen(true)}
                className="flex items-center gap-1 group hover:no-underline cursor-pointer"
              >
                <span className="text-foreground/60 text-sm">See all</span>
                <ChevronRightIcon className="size-4 text-foreground/60 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            }
          />
          {flightData.slice(0, 2).map((flight, index) => (
            <FlightCard
              key={index}
              data={flight}
              classNameInner={index % 2 === 0 ? 'bg-flight-card-inner' : ''}
              className={index % 2 === 0 ? 'bg-flight-card' : ''}
            />
          ))}
        </div>
      ),
    },
    {
      id: 6,
      role: 'assistant',
      content: (
        <div className="flex flex-col gap-2">
          <InformationHeader
            title="Where to stay"
            secondTitle={
              <Select defaultValue="cheapest">
                <SelectTrigger
                  size="sm"
                  className="border-none shadow-none bg cursor-pointer text-foreground/50 dark:dark:bg-transparent dark:dark:hover:bg-transparent"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cheapest">Cheapest</SelectItem>
                  <SelectItem value="best-location">Best Location</SelectItem>
                  <SelectItem value="best-rated">Best Rated</SelectItem>
                  <SelectItem value="best-price">Best Price</SelectItem>
                  <SelectItem value="best-reviews">Best Reviews</SelectItem>
                </SelectContent>
              </Select>
            }
            extra={
              <Button
                variant="link"
                onClick={() => setAllAccomodationOpen(true)}
                className="flex items-center gap-1 group hover:no-underline cursor-pointer"
              >
                <span className="text-foreground/60 text-sm">See all</span>
                <ChevronRightIcon className="size-4 text-foreground/60 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            }
          />
          {hotelData.slice(0, 1).map((hotel, index) => (
            <HotelCard key={index} data={hotel} />
          ))}
        </div>
      ),
    },
    {
      id: 7,
      role: 'assistant',
      content: (
        <div className="flex flex-col gap-4">
          <InformationHeader
            title="Things to do"
            secondTitle={
              <Select defaultValue="cheapest">
                <SelectTrigger
                  size="sm"
                  className="border-none shadow-none bg cursor-pointer text-foreground/50 dark:dark:bg-transparent dark:dark:hover:bg-transparent"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cheapest">Adventure-Packed</SelectItem>
                </SelectContent>
              </Select>
            }
          />
          <Timeline className="w-full md:-ml-32 md:w-[846px]">
            <TimelineItem
              step={1}
              className="group-data-[orientation=vertical]/timeline:md:ms-32 group-data-[orientation=vertical]/timeline:ms-0"
            >
              <TimelineSeparator className="hidden lg:block bg-foreground/20" />
              <TimelineDate className="hidden lg:block group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-left">
                <div className="flex flex-col gap-1">
                  <span className="text-base text-foreground/70 leading-5">
                    Day 1
                  </span>
                  <span className="text-xs text-foreground/50 font-normal leading-4">
                    Thu, May 12
                  </span>
                </div>
              </TimelineDate>
              <TimelineIndicator className="hidden lg:block bg-primary size-2 mt-1.5" />
              <TimelineContent>
                <Accordion type="single" collapsible defaultValue="item-1">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="py-0 text-foreground text-base font-medium leading-5">
                      Arrival & Exploring the City
                    </AccordionTrigger>
                    <AccordionContent className="py-2 flex flex-col gap-6">
                      <div className="flex flex-col gap-2 text-foreground/60 leading-5 text-start font-normal">
                        <span>
                          Your adventure begins as you arrive in Los Angeles early
                          in the morning. After checking into your accommodation
                          and freshening up, you'll dive into the city's vibrant
                          culture and iconic landmarks. Today is all about
                          getting familiar with LA's energy and preparing
                          for the days ahead.
                        </span>
                        <span>Approx. Total Cost: $52 for 1 person</span>
                      </div>
                      <div className="flex flex-col gap-2 text-foreground/70 leading-5 text-start">
                        <div className="flex gap-2 items-center text-base font-medium">
                          <SunriseIcon className="size-3.5" />
                          <span>Morning</span>
                        </div>
                        <div className="flex flex-col gap-2 text-sm font-normal">
                          <span>
                            🛬 Arrive at Los Angeles International Airport (LAX) at 6:30
                            AM.
                          </span>
                          <span>
                            🚕 Take a taxi or airport shuttle to your apartment
                            (30 mins, ~$25).
                          </span>
                          <span>
                            🧳 Check in at Slowly Apartments Deptford and drop
                            off your luggage.
                          </span>
                          <span>
                            🥐 Grab a quick breakfast at a local café (try
                            an acai bowl or avocado toast, $12 ~ 16).
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-3">
                        <ExploreCard
                          className="w-full"
                          title="Taxi or Shuttle"
                          description="LAX - Los Angeles International"
                          subText="20 mins, ~$25"
                          image="/images/explore-image-1.jpg"
                          iconSymbol="🚕"
                        />
                        <ExploreCard
                          className="w-full"
                          title="Acai bowl or Avocado toast"
                          description="Local café"
                          subText="$12 ~ 16"
                          image="/images/explore-image-2.jpg"
                          iconSymbol="🥐"
                        />
                      </div>
                      <Divider size="small" />
                      <div className="flex flex-col gap-2 text-foreground/70 leading-5 text-start">
                        <div className="flex gap-2 items-center text-base font-medium">
                          <SunMediumIcon className="size-3.5" />
                          <span>Afternoon</span>
                        </div>
                        <div className="flex flex-col gap-2 text-sm font-normal">
                          <span>
                            🏖️ Explore Venice Beach: Walk along the boardwalk,
                            watch street performers, and browse unique shops
                            and vendors.
                          </span>
                          <span>
                            🌮 Lunch at Grand Central Market: Try authentic tacos,
                            pupusas, and fresh California cuisine.
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-3">
                        <ExploreCard
                          title="Venice Beach"
                          description="1800 Ocean Front Walk, Venice"
                          subText="30 ~ 45 mins"
                          image="/images/los-angeles-venice-canal.png"
                          iconSymbol="🏖️"
                          className="w-full"
                        />
                        <ExploreCard
                          title="Street Tacos"
                          description="Grand Central Market"
                          subText="$8 ~ 12"
                          image="/images/los-angeles-tacos.png"
                          iconSymbol="🌮"
                          className="w-full"
                        />
                      </div>
                      <Divider size="small" />
                      <div className="flex flex-col gap-2 text-foreground/70 leading-5 text-start">
                        <div className="flex gap-2 items-center text-base font-medium">
                          <SunsetIcon className="size-3.5" />
                          <span>Evening</span>
                        </div>
                        <div className="flex flex-col gap-2 text-sm font-normal">
                          <span>
                            📷 Walk down Hollywood Boulevard and see the
                            Walk of Fame.
                          </span>
                          <span>
                            🍔 Dinner at a local restaurant: Try In-N-Out Burger or
                            Korean BBQ in Koreatown.
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-3">
                        <ExploreCard
                          title="Hollywood Boulevard"
                          description={
                            <div className="flex gap-1 items-center cursor-pointer">
                              <span>Location</span>
                              <ArrowUpRightIcon className="size-3.5" />
                            </div>
                          }
                          subText="15 ~ 20 mins"
                          image="/images/los-angeles-hollywood-blvd.png"
                          iconSymbol="📷"
                          className="w-full"
                        />
                        <ExploreCard
                          title="Korean BBQ"
                          description="Koreatown"
                          subText="$25 ~ 35"
                          image="/images/los-angeles-korean-bbq.png"
                          iconSymbol="🦐"
                          className="w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start w-full">
                        <span className="text-sm leading-5 text-foreground/60">
                          Estimated Costs for Day 1:
                        </span>
                        <div className="overflow-hidden rounded-md border w-full">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Amount</TableHead>
                                <TableHead>Date</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow className="text-start">
                                <TableCell>Transport (~2 Hours)</TableCell>
                                <TableCell>
                                  $25 (airport to apartment)
                                </TableCell>
                              </TableRow>
                              <TableRow className="text-start">
                                <TableCell>Food</TableCell>
                                <TableCell>~$40/person</TableCell>
                              </TableRow>
                              <TableRow className="text-start">
                                <TableCell>Activities (4-6 hours)</TableCell>
                                <TableCell>
                                  Free (self-guided exploration)
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem
              step={2}
              className="group-data-[orientation=vertical]/timeline:md:ms-32 group-data-[orientation=vertical]/timeline:ms-0"
            >
              <TimelineSeparator className="hidden lg:block" />
              <TimelineDate className="hidden lg:block group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-left">
                <div className="flex flex-col gap-1">
                  <span className="text-base text-foreground/70 leading-5">
                    Day 2
                  </span>
                  <span className="text-xs text-foreground/50 font-normal leading-4">
                    Fri, May 13
                  </span>
                </div>
              </TimelineDate>
              <TimelineIndicator className="hidden lg:block bg-foreground/20 size-2 mt-1.5" />
              <TimelineContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="py-0 border-b- text-foreground text-base font-medium leading-5">
                      Griffith Observatory and Downtown LA
                    </AccordionTrigger>
                    <AccordionContent className="py-2 flex flex-col gap-4">
                    <div className="flex flex-col gap-2 text-foreground/60 leading-5 text-start font-normal">
                        <span>
                          Your adventure begins as you arrive in Los Angeles early
                          in the morning. After checking into your accommodation
                          and freshening up, you'll dive into the city's vibrant
                          culture and iconic landmarks. Today is all about
                          getting familiar with LA's energy and preparing
                          for the days ahead.
                        </span>
                        <span>Approx. Total Cost: $52 for 1 person</span>
                      </div>
                      <div className="flex flex-col gap-2 text-foreground/70 leading-5 text-start">
                        <div className="flex gap-2 items-center text-base font-medium">
                          <SunriseIcon className="size-3.5" />
                          <span>Morning</span>
                        </div>
                        <div className="flex flex-col gap-2 text-sm font-normal">
                          <span>
                            🛬 Arrive at Los Angeles International Airport (LAX) at 6:30
                            AM.
                          </span>
                          <span>
                            🚕 Take a taxi or airport shuttle to your apartment
                            (30 mins, ~$25).
                          </span>
                          <span>
                            🧳 Check in at Slowly Apartments Deptford and drop
                            off your luggage.
                          </span>
                          <span>
                            🥐 Grab a quick breakfast at a local café (try
                            an acai bowl or avocado toast, $12 ~ 16).
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-3">
                        <ExploreCard
                          className="w-full"
                          title="Taxi or Shuttle"
                          description="LAX - Los Angeles International"
                          subText="20 mins, ~$25"
                          image="/images/explore-image-1.jpg"
                          iconSymbol="🚕"
                        />
                        <ExploreCard
                          className="w-full"
                          title="Acai bowl or Avocado toast"
                          description="Local café"
                          subText="$12 ~ 16"
                          image="/images/explore-image-2.jpg"
                          iconSymbol="🥐"
                        />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem
              step={3}
              className="group-data-[orientation=vertical]/timeline:md:ms-32 group-data-[orientation=vertical]/timeline:ms-0"
            >
              <TimelineSeparator className="hidden lg:block" />
              <TimelineDate className="hidden lg:block group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-left">
                <div className="flex flex-col gap-1">
                  <span className="text-base text-foreground/70 leading-5">
                    Day 3
                  </span>
                  <span className="text-xs text-foreground/50 font-normal leading-4">
                    Fri, May 14
                  </span>
                </div>
              </TimelineDate>
              <TimelineIndicator className="hidden lg:block bg-foreground/20 size-2 mt-1.5" />
              <TimelineContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="py-0 text-foreground text-base font-medium leading-5">
                      Beach Day and Santa Monica
                    </AccordionTrigger>
                    <AccordionContent>
                      <></>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      ),
    },
    {
      id: 8,
      role: 'assistant',
      content: (
        <div className="flex flex-col p-0.5 w-full rounded-2xl bg-card shadow-shadow-2 backdrop-blur-md items-start">
          <div className="flex gap-3 px-4 items-center h-11">
            <LightbulbIcon className="size-4  text-yellow-400" />
            <p className="text-foreground/70 text-base font-medium leading-5">
              Culture Adapter in Los Angeles
            </p>
          </div>
          <div className="flex flex-col gap-1 bg-card-inner w-full h-full rounded-xl p-4">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-foreground text-sm font-medium leading-5 [&>svg]:-order-1 justify-start">
                 Tipping Etiquette 💰
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-sm text-start ps-8 font-normal">
                Tipping is expected in Los Angeles. At restaurants, 18-20% is standard for good service. For example, if the bill is $50, leaving $60 is appreciated. Always tip bartenders, taxi drivers, and service staff. 💵
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-foreground text-sm font-medium leading-5 [&>svg]:-order-1 justify-start">
                   Dining Customs 🍽️
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-sm text-start ps-8 font-normal">
                 LA dining is casual and diverse. Brunch is huge on weekends (10 AM-2 PM). Food trucks are everywhere and offer amazing meals. Dietary restrictions are well-accommodated—vegan, gluten-free options are common. Happy hour (3-6 PM) offers great deals on drinks and appetizers. Water and refills are free at restaurants. 🥑
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-foreground text-sm font-medium leading-5 [&>svg]:-order-1 justify-start">
                 Public Behavior 🚶
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-sm text-start ps-8 font-normal">
                LA is laid-back but car-centric. Personal space is valued—keep distance in lines. Jaywalking is illegal and enforced. Being on time is important for business, but social events often run late. Recycling is taken seriously—use the right bins. 🚗
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-foreground text-sm font-medium leading-5 [&>svg]:-order-1 justify-start">
                 Language Tips 🗣️
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-sm text-start ps-8 font-normal">
                English is the primary language in Los Angeles, but Spanish is widely spoken. Being friendly and casual is the LA way.
                     <ul className="list-disc list-inside mt-2">
                      <li>Spanish: “hola” (hello), “gracias” (thank you), “por favor” (please)</li>
                      <li>Common greetings: "Hey" or "What's up?" are very casual and common</li>
                      <li>Even a simple greeting can go a long way.</li>
                     </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-foreground text-sm font-medium leading-5 [&>svg]:-order-1 justify-start">
                Beach Etiquette 🏖️ 
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-sm text-start ps-8 font-normal">
                Nudity isn’t allowed on most public beaches—wear swimwear. Arrive early to rent loungers or umbrellas. Loud music and messy setups aren’t welcome. Always clean up your trash and respect others’ space. 🌊
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex py-2 px-4 gap-3">
            <InfoIcon className="size-4 text-foreground/70" />
            <span className="text-foreground/60 text-xs leading-4 text-start">
              Understanding these cultural nuances will help you blend in, show
              respect, and make the most of your Los Angeles adventure.
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 9,
      role: 'assistant',
      content: (
        <div className="flex justify-between flex-col md:flex-row gap-2">
          <Button variant="ghost" className="border-2 border-input bg-layout">
            <span className="text-sm text-foreground/70">Sources</span>
            <div className="flex -space-x-3 items-center">
              <div className="rounded-full overflow-hidden border-2 border-background">
                <AirbnbIcon className="size-6" />
              </div>
              <div className="rounded-full overflow-hidden border-2 border-background">
                <UnknownIcon className="size-6" />
              </div>
              <div className="rounded-full overflow-hidden border-2 border-background">
                <BookingIcon className="size-6" />
              </div>
              <div className="rounded-full overflow-hidden border-2 border-background">
                <SkyscannerIcon className="size-6" />
              </div>
              <div className="flex items-center bg-background justify-center rounded-full size-6 p-3 overflow-hidden border-2 border-background">
                <span className="text-xs">+8</span>
              </div>
            </div>
          </Button>
          <div className="flex gap-3 justify-end">
            <Button
              variant="ghost"
              className="border-2 border-input p-4.5"
              size="icon"
            >
              <ShareIcon className="size-4" />
            </Button>
            <Button
              variant="ghost"
              className="border-2 border-input"
              size="default"
            >
              <DownloadIcon />
              Download PDF
            </Button>
          </div>
        </div>
      ),
    },
  ];

  return messages;
};
