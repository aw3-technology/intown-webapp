import { AppLayoutContent } from '@/components/custom/app-layout-content';
import { ExploreContentCard } from '@/components/custom/explore-content-card';
import { InformationHeader } from '@/components/custom/information-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronRightIcon, EarthIcon, SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export const Explore = () => {
  const [loadMore, setLoadMore] = useState(false);
  return (
    <AppLayoutContent
      title={
        <h1 className="font-medium leading-8">
          Get Inspired by Fellow Travelers
        </h1>
      }
      description={
        <p className="text-foreground/70 leading-5">
          Browse 10,000+ crowd-sourced itineraries – steal, save, or remix!
        </p>
      }
    >
      <InformationHeader
        className="text-sm"
        title={
          <span className="text-base font-medium text-foreground/60 leading-5">
            This Week's Most-Loved Plans
          </span>
        }
        extra={
          <Link
            to=""
            className="text-foreground/60 text-sm flex items-center gap-1"
          >
            See all
            <ChevronRightIcon className="size-4" />
          </Link>
        }
      />
      <ExploreContentCard
        coverImageUrl="/images/los-angeles-griffith-observatory.png"
        coverImageAlt="Griffith Observatory"
        title="Los Angeles in 5 Days"
        description="By @WanderlustSarah | 1.2K saves"
        tags={[
          {
            text: '#LosAngeles',
            bgColor: 'bg-fuchsia-100',
            darkBgColor: 'dark:bg-fuchsia-900',
            textColor: 'text-fuchsia-900',
            darkTextColor: 'dark:text-fuchsia-100',
          },
          {
            text: '#Hollywood',
            bgColor: 'bg-indigo-100',
            darkBgColor: 'dark:bg-indigo-900',
            textColor: 'text-indigo-900',
            darkTextColor: 'dark:text-indigo-100',
          },
          {
            text: '#Budget',
            bgColor: 'bg-emerald-100',
            darkBgColor: 'dark:bg-emerald-900',
            textColor: 'text-emerald-900',
            darkTextColor: 'dark:text-emerald-100',
          },
        ]}
        footer={
          <div className="flex items-center gap-2">
            <EarthIcon className="size-4 text-foreground/50" />
            <span className="text-sm text-foreground/50 leading-5 font-normal">
              Hollywood Walk of Fame → Santa Monica Beach → Griffith Observatory
            </span>
          </div>
        }
      />
      <div className="flex flex-col gap-4">
        <InformationHeader
          title={
            <span className="text-base font-medium text-foreground/60 leading-5">
              Find your perfect template
            </span>
          }
        />
        <div className="flex flex-wrap gap-4">
          <div className="*:not-first:mt-2 grow sm:grow-0 sm:basis-1/2">
            <div className="relative">
              <Input
                className="peer ps-10 pe-4 w-full border border-input shadow-sm shadow-shadow-2"
                placeholder="Try 'Bali with kids' or 'Solo Europe'"
                type="search"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <SearchIcon className="size-4" />
              </div>
            </div>
          </div>
          <Select defaultValue="trip-type">
            <SelectTrigger className="border border-input shadow-sm shadow-shadow-2 cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trip-type">Trip Type</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="duration">
            <SelectTrigger className="border border-input shadow-sm shadow-shadow-2 cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="duration">Duration</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="budget">
            <SelectTrigger className="border border-input shadow-sm shadow-shadow-2 cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="budget">Budget</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ExploreContentCard
          coverImageUrl="/images/los-angeles-hollywood.png"
          coverImageAlt="Hollywood"
          title="Hollywood & Beverly Hills Tour"
          description="By @LAExplorer | 2.4K saves"
          tags={[
            {
              text: '#Hollywood',
              bgColor: 'bg-emerald-100',
              darkBgColor: 'dark:bg-emerald-900',
              textColor: 'text-emerald-900',
              darkTextColor: 'dark:text-emerald-100',
            },
            {
              text: '#Celebrity',
              bgColor: 'bg-indigo-100',
              darkBgColor: 'dark:bg-indigo-900',
              textColor: 'text-indigo-900',
              darkTextColor: 'dark:text-indigo-100',
            },
            {
              text: '#Shopping',
              bgColor: 'bg-lime-100',
              darkBgColor: 'dark:bg-lime-900',
              textColor: 'text-lime-900',
              darkTextColor: 'dark:text-lime-100',
            },
          ]}
          footer={
            <div className="flex items-start gap-2">
              <EarthIcon className="size-4 text-foreground/50" />
              <span className="text-sm text-foreground/50 leading-5 font-normal">
                Hollywood Sign hike → Rodeo Drive → Warner Bros Studio → Sunset Strip
              </span>
            </div>
          }
        />
        <ExploreContentCard
          coverImageUrl="/images/los-angeles-venice-canal.png"
          coverImageAlt="Venice Beach"
          title="Beach Cities & Coastal Drive"
          description="By @BeachLover | 892 saves"
          tags={[
            {
              text: '#Beach',
              bgColor: 'bg-lime-100',
              darkBgColor: 'dark:bg-lime-900',
              textColor: 'text-lime-900',
              darkTextColor: 'dark:text-lime-100',
            },
            {
              text: '#Surfing',
              bgColor: 'bg-violet-100',
              darkBgColor: 'dark:bg-violet-900',
              textColor: 'text-violet-900',
              darkTextColor: 'dark:text-violet-100',
            },
            {
              text: '#Coastal',
              bgColor: 'bg-sky-100',
              darkBgColor: 'dark:bg-sky-900',
              textColor: 'text-sky-900',
              darkTextColor: 'dark:text-sky-100',
            },
          ]}
          footer={
            <div className="flex items-start gap-2">
              <EarthIcon className="size-4 text-foreground/50" />
              <span className="text-sm text-foreground/50 leading-5 font-normal">
                Venice Beach → Santa Monica Pier → Manhattan Beach → Malibu Coast
              </span>
            </div>
          }
        />
        <ExploreContentCard
          coverImageUrl="/images/los-angeles-food.png"
          coverImageAlt="LA Food"
          title="LA Foodie Weekend"
          description="By @FoodieLA | 1.7K saves"
          tags={[
            {
              text: '#StreetFood',
              bgColor: 'bg-blue-100',
              darkBgColor: 'dark:bg-blue-900',
              textColor: 'text-blue-900',
              darkTextColor: 'dark:text-blue-100',
            },
            {
              text: '#Tacos',
              bgColor: 'bg-purple-100',
              darkBgColor: 'dark:bg-purple-900',
              textColor: 'text-purple-900',
              darkTextColor: 'dark:text-purple-100',
            },
            {
              text: '#Weekend',
              bgColor: 'bg-fuchsia-100',
              darkBgColor: 'dark:bg-fuchsia-900',
              textColor: 'text-fuchsia-900',
              darkTextColor: 'dark:text-fuchsia-100',
            },
          ]}
          footer={
              <div className="flex items-start gap-2">
              <EarthIcon className="size-4 text-foreground/50" />
              <span className="text-sm text-foreground/50 leading-5 font-normal">
                Grand Central Market → K-Town BBQ → Taco trucks → Little Tokyo
              </span>
            </div>
          }
        />
        <ExploreContentCard
          coverImageUrl="/images/los-angeles-paramount-pictures.png"
          coverImageAlt="Paramount Pictures"
          title="Studio Tours & Theme Parks"
          description="By @ThemeParkPro | 1.5K saves"
          tags={[
            {
              text: '#Studios',
              bgColor: 'bg-fuchsia-100',
              darkBgColor: 'dark:bg-fuchsia-900',
              textColor: 'text-fuchsia-900',
              darkTextColor: 'dark:text-fuchsia-100',
            },
            {
              text: '#ThemeParks',
              bgColor: 'bg-sky-100',
              darkBgColor: 'dark:bg-sky-900',
              textColor: 'text-sky-900',
              darkTextColor: 'dark:text-sky-100',
            },
            {
              text: '#Family',
              bgColor: 'bg-blue-100',
              darkBgColor: 'dark:bg-blue-900',
              textColor: 'text-blue-900',
              darkTextColor: 'dark:text-blue-100',
            },
          ]}
          footer={
            <div className="flex items-start gap-2">
              <EarthIcon className="size-4 text-foreground/50" />
              <span className="text-sm text-foreground/50 leading-5 font-normal">
                Universal Studios → Warner Bros Tour → Disneyland → Six Flags
              </span>
            </div>
          }
        />
        {loadMore && (
          <>
            <ExploreContentCard
              coverImageUrl="/images/los-angeles-westwood.png"
              coverImageAlt="Westwood"
              title="UCLA & Westwood Weekend"
              description="By @CollegeExplorer | 2.4K saves"
              tags={[
                {
                  text: '#Campus',
                  bgColor: 'bg-emerald-100',
                  darkBgColor: 'dark:bg-emerald-900',
                  textColor: 'text-emerald-900',
                  darkTextColor: 'dark:text-emerald-100',
                },
                {
                  text: '#Museums',
                  bgColor: 'bg-indigo-100',
                  darkBgColor: 'dark:bg-indigo-900',
                  textColor: 'text-indigo-900',
                  darkTextColor: 'dark:text-indigo-100',
                },
                {
                  text: '#Shopping',
                  bgColor: 'bg-lime-100',
                  darkBgColor: 'dark:bg-lime-900',
                  textColor: 'text-lime-900',
                  darkTextColor: 'dark:text-lime-100',
                },
              ]}
              footer={
                <div className="flex items-start gap-2">
                  <EarthIcon className="size-4 text-foreground/50" />
                  <span className="text-sm text-foreground/50 leading-5 font-normal">
                    UCLA Campus → Hammer Museum → Westwood Village → Getty Center
                  </span>
                </div>
              }
            />
            <ExploreContentCard
              coverImageUrl="/images/los-angeles-house.png"
              coverImageAlt="LA Houses"
              title="Architecture & Celebrity Homes"
              description="By @ArchitectureLA | 892 saves"
              tags={[
                {
                  text: '#Architecture',
                  bgColor: 'bg-lime-100',
                  darkBgColor: 'dark:bg-lime-900',
                  textColor: 'text-lime-900',
                  darkTextColor: 'dark:text-lime-100',
                },
                {
                  text: '#CelebHomes',
                  bgColor: 'bg-violet-100',
                  darkBgColor: 'dark:bg-violet-900',
                  textColor: 'text-violet-900',
                  darkTextColor: 'dark:text-violet-100',
                },
                {
                  text: '#Tours',
                  bgColor: 'bg-sky-100',
                  darkBgColor: 'dark:bg-sky-900',
                  textColor: 'text-sky-900',
                  darkTextColor: 'dark:text-sky-100',
                },
              ]}
              footer={
                <div className="flex items-start gap-2">
                  <EarthIcon className="size-4 text-foreground/50" />
                  <span className="text-sm text-foreground/50 leading-5 font-normal">
                    Beverly Hills mansions → Hollywood Hills → Case Study Houses → Bel Air
                  </span>
                </div>
              }
            />
            <ExploreContentCard
              coverImageUrl="/images/los-angeles-skyline.png"
              coverImageAlt="Downtown LA"
              title="Downtown LA Arts District"
              description="By @ArtsyLA | 1.7K saves"
              tags={[
                {
                  text: '#Arts',
                  bgColor: 'bg-blue-100',
                  darkBgColor: 'dark:bg-blue-900',
                  textColor: 'text-blue-900',
                  darkTextColor: 'dark:text-blue-100',
                },
                {
                  text: '#Museums',
                  bgColor: 'bg-purple-100',
                  darkBgColor: 'dark:bg-purple-900',
                  textColor: 'text-purple-900',
                  darkTextColor: 'dark:text-purple-100',
                },
                {
                  text: '#Urban',
                  bgColor: 'bg-fuchsia-100',
                  darkBgColor: 'dark:bg-fuchsia-900',
                  textColor: 'text-fuchsia-900',
                  darkTextColor: 'dark:text-fuchsia-100',
                },
              ]}
              footer={
                <div className="flex items-start gap-2">
                  <EarthIcon className="size-4 text-foreground/50" />
                  <span className="text-sm text-foreground/50 leading-5 font-normal">
                    The Broad → MOCA → Arts District galleries → Little Tokyo
                  </span>
                </div>
              }
            />
          </>
        )}
      </div>
      <div className="flex justify-center">
        <Button
          variant="outline"
          className="px-4 h-8.5 text-sm text-foreground/70"
          onClick={() => setLoadMore(!loadMore)}
        >
          Load More
        </Button>
      </div>
    </AppLayoutContent>
  );
};
