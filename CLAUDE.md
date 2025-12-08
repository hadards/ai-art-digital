# AI Art Digital - Landing Page Project

## Code Standards & Architecture

### Reusable Functionalities & Logic
- Extract common business logic into utility functions and services
- Create shared helper functions for data processing, validation, formatting
- Build reusable state management logic that can be applied across features
- Use factory patterns for creating similar objects/configurations
- Abstract repetitive operations into pure functions

### Avoid Code Duplication
- NO duplicate validation logic - create shared validators
- NO duplicate API call patterns - create generic request handlers
- NO duplicate formatting logic - centralize currency, date, text formatters
- NO duplicate event handling - create shared event utilities
- NO duplicate configuration parsing - single source of truth

### Shared Business Logic
- Language switching logic - one implementation used everywhere
- WhatsApp URL generation - single function with parameters
- Price formatting and display - shared utility for all pricing
- Configuration reading - shared service for all feature flags
- Analytics tracking - unified tracking function

### Decoupling & Modularity
- Separate data layer from presentation layer
- Use composition to build complex features from simple parts
- Create abstract base classes for common functionality
- Make modules independent - no tight coupling between features

### Easy Feature Addition/Removal
- Feature flag system that cleanly enables/disables functionality
- Modular architecture where features don't depend on each other
- Plugin-style development for new services
- Configuration-driven features that require no code changes

### No Icons or Emojis in Code
- Keep all code files clean and professional
- No decorative symbols or emojis in any code
- Use descriptive names instead of symbolic references

### Smart Code Organization
- Group related logic into focused modules
- Create single-purpose functions that do one thing well
- Build testable, mockable functions and classes
- Follow DRY principles for maintainable code
- when you finish testing and running, kill the app so I could use that port