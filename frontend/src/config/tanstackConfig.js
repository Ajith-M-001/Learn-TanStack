// import { QueryClient, QueryCache } from "@tanstack/react-query";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       // Global configuration for all queries
//       staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
//       cacheTime: 1000 * 60 * 30, // Unused data is garbage collected after 30 minutes
//       retry: 3, // Number of times to retry failed queries
//       retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
//       refetchOnWindowFocus: "always", // Refetch when window regains focus
//       refetchOnReconnect: "always", // Refetch when reconnecting
//       refetchOnMount: "always", // Refetch when component mounts
//       suspense: false, // Don't use React Suspense by default
//       networkMode: "online", // Only make requests when online

//       // Error handling
//       throwOnError: false, // Don't throw errors to React Error Boundary
//       gcTime: 1000 * 60 * 60 * 24, // Keep data in garbage collection for 24 hours

//       // Performance optimization
//       keepPreviousData: true, // Keep old data while fetching new data
//       structuralSharing: true, // Structural sharing between query results
//     },
//     mutations: {
//       // Global configuration for all mutations
//       retry: 2, // Number of times to retry failed mutations
//       retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
//       networkMode: "online",
//       throwOnError: false,

//       // Optimistic updates should be handled per mutation
//       // using onMutate, onError, onSettled callbacks
//     },
//   },

//   // Configure the query cache
//   queryCache: new QueryCache({
//     onError: (error, query) => {
//       // Global error handling
//       if (error instanceof Error) {
//         console.error(`Something went wrong: ${error.message}`);

//         // You could trigger a toast notification here
//         // toast.error(`Error: ${error.message}`);
//       }
//     },
//   }),

//   // Configure the mutation cache
//   mutationCache: new MutationCache({
//     onError: (error, variables, context, mutation) => {
//       // Global mutation error handling
//       if (error instanceof Error) {
//         console.error(`Mutation error: ${error.message}`);

//         // You could trigger a toast notification here
//         // toast.error(`Error: ${error.message}`);
//       }
//     },
//   }),
// });

// // Optional: Add global listeners
// queryClient.getQueryCache().subscribe((event) => {
//   // React to query cache changes
//   if (
//     event.type === "added" ||
//     event.type === "removed" ||
//     event.type === "updated"
//   ) {
//     // You could track query cache size or other metrics here
//     console.debug("Query cache event:", event.type, event.query.queryKey);
//   }
// });

// export default queryClient;
